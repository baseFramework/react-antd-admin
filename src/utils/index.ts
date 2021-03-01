import moment from 'moment'
import stores from 'src/stores'

export default class Util {
  public static getHrefMap(search: string) {
    if (search) {
      const searchCon: string = search.split('?')[1]
      const searchItem: string[] = searchCon.split('&')
      const res: any = {}

      searchItem.forEach((item: string) => {
        const key: string = item.split('=')[0]
        const val: string = item.split('=')[1]
        res[key] = val
      })
      return res
    }
    return null
  }

  public static makeQuery(queryObject: any) {
    const entries: any[] = Object.entries(queryObject)
    const query = entries
      .reduce((result, entry: any[]) => {
        result.push(entry.join('='))
        return result
      }, [])
      .join('&')
    return `?${query}`
  }

  public static setMenu(list: any[], parentId: string[] = []) {
    list.forEach((item: any) => {
      item.parent_id = []
      if (parentId && parentId.length > 0) {
        item.parent_id = [...parentId]
      }
      if (item.children && item.children.length > 0) {
        this.setMenu(item.children, [...item.parent_id, item.id])
      }
    })
  }

  public static momentDate(num: any, type: string = 'date_time'): string {
    if (num) {
      if (Object.prototype.toString.call(num) === '[object Date]') {
        num = num.getTime()
      }
      switch (type) {
        case 'date':
          return moment(parseInt(num, 10)).format('YYYY-MM-DD')
        case 'date_h':
          return moment(parseInt(num, 10)).format('YYYY/MM/DD')
        case 'date_time':
          return moment(parseInt(num, 10)).format('YYYY-MM-DD HH:mm:ss')
        case 'data_h_time':
          return moment(parseInt(num, 10)).format('YYYY/MM/DD HH:mm:ss')
        case 'data_h_time_h':
          return moment(parseInt(num, 10)).format('YYYY/MM/DD HH:mm')
        case 'time':
          return moment(parseInt(num, 10)).format('HH:mm:ss')
        case 'time_h':
          return moment(parseInt(num, 10)).format('HH:mm')
        default:
          return moment(parseInt(num, 10)).format('YYYY-MM-DD HH:mm:ss')
      }
    } else {
      return ''
    }
  }

  public static isPlainObject(val: any): val is object {
    return toString.call(val) === '[object Object]'
  }

  public static deepMerge(...objs: any[]): any {
    const result = Object.create(null)

    objs.forEach(obj => {
      if (obj) {
        Object.keys(obj).forEach(key => {
          const val = obj[key]
          if (Util.isPlainObject(val)) {
            if (Util.isPlainObject(result[key])) {
              result[key] = Util.deepMerge(result[key], val)
            } else {
              result[key] = Util.deepMerge(val)
            }
          } else {
            result[key] = val
          }
        })
      }
    })
    return result
  }

  public static findMenuByName(name: string, menuList: any): any {
    const menuListArray: [] = menuList.slice()
    const len: number = menuListArray.length
    for (let i = 0; i < len; i++) {
      const menuItem: any = menuListArray[i]
      if (menuItem.name === name) {
        return { ...menuItem }
      }
      if (menuItem.children) {
        const targetMenuObj = this.findMenuByName(name, menuItem.children)
        if (targetMenuObj) {
          return targetMenuObj
        }
      }
    }
  }

  public static findObjFromTreeDataById(id: string, treeData: any): any {
    const treeList: [] = treeData.slice()
    const len: number = treeList.length
    for (let i = 0; i < len; i++) {
      const item: any = treeList[i]
      if (item.id === id) {
        return { ...item }
      }
      if (item.children) {
        const targetObj = this.findObjFromTreeDataById(id, item.children)
        if (targetObj) {
          return targetObj
        }
      }
    }
  }

  public static getBlob(url: any) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest()
      const s: any = stores
      const accessToken: any = s.userStore.getAccessToken()
      xhr.open('GET', url, true)
      xhr.responseType = 'blob'
      xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`)
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response)
        }
      }

      xhr.send()
    })
  }

  public static saveAs(blob: any, filename: any) {
    if (!!window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename)
    } else {
      const link = document.createElement('a')

      link.href = window.URL.createObjectURL(blob)
      link.download = filename
      link.click()

      window.URL.revokeObjectURL(link.href)
    }
  }

  public static download = (url: any, filename: any): void | undefined => {
    Util.getBlob(url).then(blob => {
      Util.saveAs(blob, filename)
    })
  }

  public static getAuthHeader(): any {
    const s: any = stores
    const accessToken: any = s.userStore.getAccessToken()
    if (accessToken) {
      return { Authorization: `Bearer ${accessToken}` }
    }
    return {}
  }

  public static viewGo(url: string): void {
    const dom = document.createElement('a')
    dom.setAttribute('href', url)
    dom.setAttribute('target', '_blank')
    const e = document.createEvent('MouseEvents')
    e.initEvent('click', true, true)
    dom.dispatchEvent(e)
  }
  /* 判断当前窗口是否是全屏状态 */
  public static isFullScreen() {
    const document: any = window.document
    return !!(
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.webkitFullScreen ||
      document.msFullScreen
    )
  }
  /* 全屏状态切换 */
  public static requestFullScreen(
    element: any = window.document.documentElement
  ) {
    const document: any = window.document
    if (this.isFullScreen()) {
      // 判断各种浏览器，找到正确的方法
      const exitMethod: any =
        document.exitFullscreen || // W3C
        document.mozCancelFullScreen || // Chrome等
        document.webkitExitFullscreen || // FireFox
        document.webkitExitFullscreen // IE11
      if (exitMethod) {
        console.log('exitMethod', exitMethod)
        exitMethod.call(document)
      }
    } else {
      // const element: any = document.documentElement
      const requestMethod: any =
        element.requestFullScreen || // W3C
        element.webkitRequestFullScreen || // Chrome等
        element.mozRequestFullScreen || // FireFox
        element.msRequestFullScreen // IE11
      if (requestMethod) {
        requestMethod.call(element)
      }
    }
  }
}
