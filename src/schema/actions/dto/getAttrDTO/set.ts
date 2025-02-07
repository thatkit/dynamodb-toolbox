import type { SetAttribute } from '~/attributes/set/index.js'
import { SET_DEFAULT_OPTIONS } from '~/attributes/set/options.js'
import { isEmpty } from '~/utils/isEmpty.js'

import type { SetAttrDTO } from '../types.js'
import { getAttrDTO } from './attribute.js'
import { getDefaultsDTO } from './utils.js'

/**
 * @debt feature "handle defaults, links & validators DTOs"
 */
export const getSetAttrDTO = (attr: SetAttribute): SetAttrDTO => {
  const defaultsDTO = getDefaultsDTO(attr)

  return {
    type: attr.type,
    elements: getAttrDTO(attr.elements) as SetAttrDTO['elements'],
    ...(attr.required !== SET_DEFAULT_OPTIONS.required ? { required: attr.required } : {}),
    ...(attr.hidden !== SET_DEFAULT_OPTIONS.hidden ? { hidden: attr.hidden } : {}),
    ...(attr.key !== SET_DEFAULT_OPTIONS.key ? { key: attr.key } : {}),
    ...(attr.savedAs !== undefined ? { savedAs: attr.savedAs } : {}),
    ...(!isEmpty(defaultsDTO) ? { defaults: defaultsDTO } : {})
  }
}
