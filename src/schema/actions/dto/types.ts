import type { RequiredOption } from '~/attributes/constants/requiredOptions.js'
import type { AtLeastOnce } from '~/attributes/index.js'

// TODO: Infer from actual list of defaulters
type AttrDefaulterDTO = { defaulterId: 'value'; value: unknown } | { defaulterId: 'custom' }

interface AttrDefaultsDTO {
  put?: AttrDefaulterDTO
  key?: AttrDefaulterDTO
  update?: AttrDefaulterDTO
}

// TODO: Infer from actual list of linkers
type AttrLinkerDTO = { linkerId: 'custom' }

interface AttrLinksDTO {
  put?: AttrLinkerDTO
  key?: AttrLinkerDTO
  update?: AttrLinkerDTO
}

interface AttrStateDTO {
  required?: RequiredOption
  hidden?: boolean
  key?: boolean
  savedAs?: string
  defaults?: AttrDefaultsDTO
  links?: AttrLinksDTO
}

export interface AnyAttrDTO extends AttrStateDTO {
  type: 'any'
}

export interface NullAttrDTO extends AttrStateDTO {
  type: 'null'
}

export interface BooleanAttrDTO extends AttrStateDTO {
  type: 'boolean'
  enum?: boolean[]
}

export interface NumberAttrDTO extends AttrStateDTO {
  type: 'number'
  big?: boolean
  enum?: (number | string)[]
}

// TODO: Infer from actual list of transformers
type StringAttrTransformerDTO =
  | {
      transformerId: 'prefix'
      prefix: string
      delimiter: string
    }
  | { transformerId: 'custom' }

export interface StringAttrDTO extends AttrStateDTO {
  type: 'string'
  enum?: string[]
  transform?: StringAttrTransformerDTO
}

export interface BinaryAttrDTO extends AttrStateDTO {
  type: 'binary'
  enum?: string[]
}

export type PrimitiveAttrDTO =
  | NullAttrDTO
  | BooleanAttrDTO
  | NumberAttrDTO
  | StringAttrDTO
  | BinaryAttrDTO

export interface SetAttrDTO extends AttrStateDTO {
  type: 'set'
  elements: (NumberAttrDTO | StringAttrDTO | BinaryAttrDTO) & {
    required?: AtLeastOnce
    hidden?: false
    savedAs?: undefined
    defaults?: undefined
    links?: undefined
  }
}

export interface ListAttrDTO extends AttrStateDTO {
  type: 'list'
  elements: AttributeDTO & {
    required?: AtLeastOnce
    hidden?: false
    savedAs?: undefined
    defaults?: undefined
    links?: undefined
  }
}

export interface MapAttrDTO extends AttrStateDTO {
  type: 'map'
  attributes: { [name: string]: AttributeDTO }
}

export interface RecordAttrDTO extends AttrStateDTO {
  type: 'record'
  keys: StringAttrDTO & {
    required?: AtLeastOnce
    hidden?: false
    key?: false
    savedAs?: undefined
    defaults?: undefined
    links?: undefined
  }
  elements: AttributeDTO & {
    required?: AtLeastOnce
    hidden?: false
    key?: false
    savedAs?: undefined
    defaults?: undefined
    links?: undefined
  }
}

export interface AnyOfAttrDTO extends AttrStateDTO {
  type: 'anyOf'
  elements: (AttributeDTO & {
    required?: AtLeastOnce
    hidden?: false
    savedAs?: undefined
    defaults?: undefined
    links?: undefined
  })[]
}

export type AttributeDTO =
  | AnyAttrDTO
  | NullAttrDTO
  | BooleanAttrDTO
  | NumberAttrDTO
  | StringAttrDTO
  | BinaryAttrDTO
  | SetAttrDTO
  | ListAttrDTO
  | MapAttrDTO
  | RecordAttrDTO
  | AnyOfAttrDTO

export interface ISchemaDTO {
  type: 'schema'
  attributes: { [name: string]: AttributeDTO }
}
