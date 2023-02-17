import type { EntityV2, PossiblyUndefinedResolvedItem, KeyInput } from 'v1'
import { cloneInputAndAddDefaults } from 'v1/commands/utils/cloneInputAndAddDefaults'

import { parseItemKeyInput } from './item'

type EntityKeyInputParser = <ENTITY extends EntityV2>(
  entity: ENTITY,
  input: PossiblyUndefinedResolvedItem
) => KeyInput<ENTITY>

export const parseEntityKeyInput: EntityKeyInputParser = (entity, input) => {
  const clonedInputWithDefaults = cloneInputAndAddDefaults(entity.item, input, {
    computeDefaults: undefined
  })

  const clonedInputWithComputedDefaults = clonedInputWithDefaults

  return parseItemKeyInput(entity.item, clonedInputWithComputedDefaults) as any
}
