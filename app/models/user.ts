import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Users extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userName: String

  // @column()
  // declare surName: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
