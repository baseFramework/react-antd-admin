/* eslint-disable @typescript-eslint/no-explicit-any */
//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";
import usersService from '../services/users'
class User {
  userName = "Ronghua.wu";
  userResult:any = {};
  constructor() {
    makeAutoObservable(this);
  }
  changeName() {
    this.userName = "ronghua123123123";
  }
  getAccessToken(){
    return new Date().getTime();
  }
  async fetchUserList(){
    const res = await usersService.getList();
    if (res.status === 200) {
      this.userResult = res.data
    }
  }
}

export default new User();
