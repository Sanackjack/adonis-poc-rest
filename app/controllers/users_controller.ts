import Users from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index(context: HttpContext) {
    const users = await Users.all()
    return users
  }

  async create(context: HttpContext) {
    const user = new Users()
    user.userName = context.request.input('username')
    user.save()

    return 'true'
  }
}
