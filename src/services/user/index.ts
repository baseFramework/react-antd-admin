import { Service } from '..'
import { action } from 'mobx'

export class UserService extends Service {

  constructor (path: string = '/api/account') {
    super(path)
  }

  @action public async sign (data: any = {}): Promise<any> {
    return this.post('/user/login', data)
  }

  @action public async sigout (data: any = {}): Promise<any> {
    return this.post('/user/logout', data)
  }

  @action public async getProfile (data: any = {}): Promise<any> {
    return this.get('/user/profile', data)
  }

  @action public async getUseList (data: any = {}): Promise<any> {
    return this.get('/user/list', data)
  }
}

export default new UserService()