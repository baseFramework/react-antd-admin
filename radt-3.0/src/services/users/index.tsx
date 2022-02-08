/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from '..'
import system from '../../config/system'

export class usersService extends Service {
  constructor(path: string = system.backendServer) {
    super(path)
  }

  public async getList(): Promise<any> {
    return await this.get(`/mock/data/2194981`, new Map())
  }
}

export default new usersService()
