import { ResolvedPrimitiveAttribute } from '../primitive'

import { RequiredOption } from './requiredOptions'

export const $type = Symbol('$type')
export type $type = typeof $type

export const $elements = Symbol('$elements')
export type $elements = typeof $elements

export const $attributes = Symbol('$attributes')
export type $attributes = typeof $attributes

export const $value = Symbol('$value')
export type $value = typeof $value

export const $required = Symbol('$required')
export type $required = typeof $required

export const $hidden = Symbol('$hidden')
export type $hidden = typeof $hidden

export const $keys = Symbol('$keys')
export type $keys = typeof $keys

export const $key = Symbol('$key')
export type $key = typeof $key

export const $defaults = Symbol('$defaults')
export type $defaults = typeof $defaults

export const $enum = Symbol('$enum')
export type $enum = typeof $enum

export const $savedAs = Symbol('$savedAs')
export type $savedAs = typeof $savedAs

export type $AttributeOptionSymbol =
  | $type
  | $keys
  | $elements
  | $attributes
  | $value
  | $required
  | $hidden
  | $key
  | $defaults
  | $enum
  | $savedAs

export type AttributeOptionSymbolName = {
  [$type]: 'type'
  [$keys]: 'keys'
  [$elements]: 'elements'
  [$attributes]: 'attributes'
  [$value]: 'value'
  [$required]: 'required'
  [$hidden]: 'hidden'
  [$key]: 'key'
  [$defaults]: 'defaults'
  [$enum]: 'enum'
  [$savedAs]: 'savedAs'
}

export type AttributeOptionName = AttributeOptionSymbolName[$AttributeOptionSymbol]

export type AttributeOptionNameSymbol = {
  type: $type
  keys: $keys
  elements: $elements
  attributes: $attributes
  value: $value
  required: $required
  hidden: $hidden
  key: $key
  defaults: $defaults
  enum: $enum
  savedAs: $savedAs
}

export type AttributeOptionsConstraints = {
  required: RequiredOption
  hidden: boolean
  key: boolean
  savedAs: string | undefined
  enum: ResolvedPrimitiveAttribute[] | undefined
}
