import type { Item, AtLeastOnce, PrimitiveAttribute } from 'v1/item'
import type { EntityNameAttributeSavedAs, TableV2 } from 'v1/table'

import { WithRootAttribute, addRootAttribute } from 'v1/item/utils/addRootAttribute'

export type EntityNameAttribute<
  TABLE extends TableV2,
  ENTITY_NAME extends string
> = PrimitiveAttribute<
  'string',
  {
    required: AtLeastOnce
    hidden: true
    key: false
    savedAs: EntityNameAttributeSavedAs<TABLE>
    enum: [ENTITY_NAME]
    default: ENTITY_NAME
  }
>

export type WithEntityNameAttribute<
  ITEM extends Item,
  TABLE extends TableV2,
  ENTITY_NAME_ATTRIBUTE_NAME extends string,
  ENTITY_NAME extends string
> = string extends ENTITY_NAME
  ? ITEM
  : WithRootAttribute<ITEM, ENTITY_NAME_ATTRIBUTE_NAME, EntityNameAttribute<TABLE, ENTITY_NAME>>

export const addEntityNameAttribute = <
  ITEM extends Item,
  TABLE extends TableV2,
  ENTITY_NAME_ATTRIBUTE_NAME extends string,
  ENTITY_NAME extends string
>({
  item,
  table,
  entityNameAttributeName,
  entityName
}: {
  item: ITEM
  table: TABLE
  entityNameAttributeName: ENTITY_NAME_ATTRIBUTE_NAME
  entityName: ENTITY_NAME
}): WithEntityNameAttribute<ITEM, TABLE, ENTITY_NAME_ATTRIBUTE_NAME, ENTITY_NAME> => {
  const entityNameAttribute: EntityNameAttribute<TABLE, ENTITY_NAME> = {
    path: entityNameAttributeName,
    type: 'string',
    required: 'atLeastOnce',
    hidden: true,
    key: false,
    savedAs: table.entityNameAttributeSavedAs,
    enum: [entityName],
    default: entityName
  }

  return addRootAttribute(
    item,
    entityNameAttributeName,
    entityNameAttribute
  ) as string extends ENTITY_NAME
    ? ITEM
    : WithRootAttribute<ITEM, ENTITY_NAME_ATTRIBUTE_NAME, EntityNameAttribute<TABLE, ENTITY_NAME>>
}
