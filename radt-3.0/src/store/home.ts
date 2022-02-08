//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";
class Home {
  collapsed = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggle = () => {
    this.collapsed = !this.collapsed;
  };

}

export default new Home();
