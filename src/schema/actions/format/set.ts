import type { SetAttribute } from '~/attributes/index.js'
import { DynamoDBToolboxError } from '~/errors/index.js'
import { isSet } from '~/utils/validation/isSet.js'

import { attrFormatter } from './attribute.js'
import type { FormatterReturn, FormatterYield } from './formatter.js'
import type { FormatValueOptions } from './options.js'

export function* setAttrFormatter(
  attribute: SetAttribute,
  rawValue: unknown,
  options: FormatValueOptions<SetAttribute> = {}
): Generator<
  FormatterYield<SetAttribute, FormatValueOptions<SetAttribute>>,
  FormatterReturn<SetAttribute, FormatValueOptions<SetAttribute>>
> {
  const { format = true, transform = true } = options

  if (!isSet(rawValue)) {
    const { path, type, savedAs } = attribute

    throw new DynamoDBToolboxError('formatter.invalidAttribute', {
      message: `Invalid attribute detected while formatting${
        path !== undefined ? `: '${path}'` : ''
      }${savedAs !== undefined ? ` (saved as '${savedAs}')` : ''}. Should be a ${type}.`,
      path: path,
      payload: { received: rawValue, expected: type }
    })
  }

  // TODO: Remove this cast
  const formatters: Generator<any, any>[] = [...rawValue.values()].map(value =>
    attrFormatter(attribute.elements, value, { ...options, attributes: undefined })
  )

  if (transform) {
    const transformedValue = new Set(
      formatters.map(formatter => formatter.next().value).filter(value => value !== undefined)
    )
    if (format) {
      yield transformedValue
    } else {
      return transformedValue
    }
  }

  const formattedValue = new Set(
    formatters.map(formatter => formatter.next().value).filter(value => value !== undefined)
  )
  return formattedValue
}
