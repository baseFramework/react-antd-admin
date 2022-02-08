//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";

class Loader {
  loading;
  constructor() {
    this.loading = false
    makeAutoObservable(this);
  }
  loaderStart() {
    this.loading = true;
  }
  loaderEnd() {
    this.loading = false;
  }
  getLoading() {
    return this.loading;
  }
}

export default new Loader();
