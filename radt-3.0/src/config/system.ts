//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";

class System {
  backendServer = "http://rap2api.taobao.org/app"; // mock
 // mock
  constructor() {
    makeAutoObservable(this);
  }
}

export default new System();
