import { UserService } from '@iredium/butterfly/dist/services'
import { ApiController } from '@iredium/butterfly/dist/controllers'
import { UserPolicy } from '@iredium/butterfly/dist/policies'

export class UsersController extends ApiController {
  public constructor () {
    super(UserService, UserPolicy)
  }
}
