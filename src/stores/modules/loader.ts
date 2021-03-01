import { action, observable } from 'mobx'

export class LoaderStore {
  @observable private loading: boolean

  constructor () {
    this.loading = false
  }

  @action  public loaderStart () {
    this.loading = true
  }

  @action public loaderEnd () {
    this.loading = false
  }

  public get getLoading (): boolean {
    return this.loading
  }
}

export default new LoaderStore()
