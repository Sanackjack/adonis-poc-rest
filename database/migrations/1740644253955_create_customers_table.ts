import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('first_name')
      table.string('last_name')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}