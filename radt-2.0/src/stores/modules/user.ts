import { action, observable } from 'mobx'
import Cookies from 'js-cookie'
import { history } from 'src/routers'
export class UserStore {
  @observable private isLogin: boolean
  @observable private account!: Map<string, any> | undefined

  constructor() {
    this.isLogin = false
  }

  public get getIsLogin(): boolean {
    return this.isLogin
  }

  public getAccount(): any {
    if (this.account) {
      return this.account
    } else if (window.localStorage.getItem('account_info')) {
      let accountInfo!: Map<string, any>
      try {
        accountInfo = JSON.parse(
          decodeURIComponent(
            window.localStorage.getItem('account_info') as string
          )
        )
      } catch (e) {
        console.log(e)
      }
      return accountInfo
    } else {
      return false
    }
  }

  @action public getAuthHeader(): any {
    return {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
      dp_user_id: Cookies.get('dp_user_id'),
      sys_role: Cookies.get('sys_role')
    }
  }

  @action public getAccessToken(): any {
    return Cookies.get('access_token')
  }

  @action public login(accountInfo: any) {
    window.localStorage.clear()
    window.localStorage.setItem('account_info', JSON.stringify(accountInfo))
    this.account = accountInfo
    this.isLogin = true
  }

  @action public sigout() {
    Cookies.remove('access_token')
    window.localStorage.clear()
    this.account = undefined
    this.isLogin = false
    history.push('/login')
  }
}

export default new UserStore()
