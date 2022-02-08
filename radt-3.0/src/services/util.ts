/* eslint-disable @typescript-eslint/no-explicit-any */
//简单功能的模块一个文件即可
import { makeAutoObservable } from "mobx";

class Util {
  constructor() {
    makeAutoObservable(this);
  }
  makeQuery(queryObject: any) {
    const entries: any[] = Object.entries(queryObject)
    const query = entries
      .reduce((result, entry: any[]) => {
        result.push(entry.join('='))
        return result
      }, [])
      .join('&')
    return `?${query}`
  }
}

export default new Util();
