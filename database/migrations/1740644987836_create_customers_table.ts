import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'customers'
  async down() {
    this.schema.dropTable(this.tableName)
  }
}