import { Table, Entity } from '../index.js'
import { DocumentClient as docClient } from './bootstrap.test.js'
import assert from 'assert'

const TestTable = new Table({
  name: 'test-table',
  alias: 'testTable',
  partitionKey: 'pk',
  sortKey: 'sk',
  indexes: { GSI1: { partitionKey: 'GSI1pk', sortKey: 'GSIsk1' } },
  DocumentClient: docClient
})

const TestEntity = new Entity({
  name: 'TestEntity',
  autoExecute: false,
  attributes: {
    email: { type: 'string', partitionKey: true },
    sort: { type: 'string', sortKey: true },
    test: 'string'
  },
  table: TestTable
} as const)

describe('transactWrite', () => {
  test('fails when transactWrite is empty', () => {
    expect(() => {
      // @ts-expect-error
      TestTable.transactWriteParams()
    }).toThrow(`No items supplied`)
  })

  test('fails when transactWrite items is an empty array', () => {
    expect(() => {
      TestTable.transactWriteParams([])
    }).toThrow(`No items supplied`)
  })

  test('transactWrite put, update, delete data', () => {
    const result = TestTable.transactWriteParams([
      TestEntity.putTransaction({ email: 'test', sort: 'testsk1', test: 'test' }),
      TestEntity.updateTransaction({ email: 'test', sort: 'testsk2', test: 'test' }),
      TestEntity.deleteTransaction({ email: 'test', sort: 'testsk3' })
    ])

    assert.ok(result.TransactItems !== undefined, 'result is undefined')
    expect(result.TransactItems[0]?.Put?.Item?.sk).toBe('testsk1')
    expect(result.TransactItems[1]?.Update?.UpdateExpression).toBe(
      'SET #_ct = if_not_exists(#_ct,:_ct), #_md = :_md, #_et = if_not_exists(#_et,:_et), #test = :test'
    )
    expect(result.TransactItems[2]?.Delete?.Key?.sk).toBe('testsk3')
  })

  test('fails when extra options', () => {
    expect(() => {
      TestTable.transactWriteParams(
        [TestEntity.putTransaction({ email: 'test', sort: 'testsk' })],
        // @ts-expect-error
        { invalid: true }
      )
    }).toThrow(`Invalid transactWrite options: invalid`)
  })

  test('fails when providing an invalid capacity setting', () => {
    expect(() => {
      TestTable.transactWriteParams(
        [TestEntity.putTransaction({ email: 'test', sort: 'testsk' })],
        // @ts-expect-error
        { capacity: 'test' }
      )
    }).toThrow(`'capacity' must be one of 'NONE','TOTAL', OR 'INDEXES'`)
  })

  test('fails when providing an invalid metrics setting', () => {
    expect(() => {
      TestTable.transactWriteParams(
        [TestEntity.putTransaction({ email: 'test', sort: 'testsk' })],
        // @ts-expect-error
        { metrics: 'test' }
      )
    }).toThrow(`'metrics' must be one of 'NONE' OR 'SIZE'`)
  })

  test('allows to provide custom params', () => {
    const result = TestTable.transactWriteParams(
      [TestEntity.putTransaction({ email: 'test', sort: 'testsk' })],
      {
        token: 'some-token'
      },
      {
        ClientRequestToken: 'some-custom-token'
      }
    )

    expect(result.ClientRequestToken).toBe('some-custom-token')
  })
})
