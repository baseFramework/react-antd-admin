//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";

class User {
  userName = "Ronghua.wu";

  constructor() {
    makeAutoObservable(this);
  }

  changeName() {
    this.userName = "ronghua123123123";
  }
}

export default new User();
