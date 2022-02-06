import { action, observable } from 'mobx'

export class HeaderStore {
  @observable private toggleMenu: boolean

  constructor () {
    this.toggleMenu = false
  }

  public get getToggleMenu () {
    return this.toggleMenu
  }

  @action public async toggle (id: string) {
    this.toggleMenu = !this.toggleMenu
  }
}

export default new HeaderStore()