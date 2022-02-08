/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-fallthrough */
/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios'
import 'reflect-metadata'
import Loader from '../store/loader'
import user from '../store/user'
import Util from './util'
const CancelToken = axios.CancelToken
const source = CancelToken.source()
interface HttpBase {
  http: any
  get(str: string, data: object, resolve: any): Promise<any>
  delete(str: string, data: object, resolve: any): Promise<any>
  put(str: string, data: object, resolve: any): Promise<any>
  post(str: string, data: object, resolve: any): Promise<any>
}

class AxiosUtil {
  public static http: any
  public static reqCount = 0
  public static isValidLogin = false
  public static loader = Loader


  public static getAxios(): any {
    if (!this.http) {
      this.http = axios
      this.http.timeout = 15000

      this.http.interceptors.request.use(
        (config: any) => {
          const hideLoader = config.data && config.data.hideLoader
          if (this.reqCount === 0 && !hideLoader) {
            this.loader.loaderStart()
          }

          config.headers.Authorization = `Bearer ${user.getAccessToken()}`
          config.headers.token = user.getAccessToken()// rider pie api的token key, 仅用于测试到时候删除
          this.reqCount++
          return config
        },
        (error: any) => {
          this.reqCount--
          if (this.reqCount === 0) {
            this.loader.loaderEnd()
          }
          return Promise.reject(error)
        }
      )

      this.http.interceptors.response.use(
        (response: any) => {
          this.isValidLogin = true
          this.reqCount--
          if (this.reqCount === 0) {
            this.loader.loaderEnd()
          }
          return response
        },
        (error: any) => {
          this.reqCount--
          if (this.reqCount === 0) {
            this.loader.loaderEnd()
          }
          if (error.response) {
            switch (error.response.status) {
              case 401:
                // TODO
              // case 403:
              //   if (this.isValidLogin) {
              //     message.error('登录已经失效，请重新登录')
              //   }
              //   user.sigout()
              //   this.isValidLogin = false
              //   source.cancel('')
              //   break
              default:
                break
            }
          }
          return Promise.reject(error)
        }
      )
    }
    return this.http
  }
}

export class Service implements HttpBase {
  public http: any
  public ROOT_URL: string

  constructor(path: string) {
    this.http = AxiosUtil.getAxios()
    this.ROOT_URL = path
  }

  public async get(
    str: string,
    data: Record<string | number, any>,
    hideLoader = false,
    headers: any = {},
  ): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .get(`${this.ROOT_URL}${str}`, {
          cancelToken: source.token,
          params: data || {},
          headers: headers || {},
          data: {
            hideLoader
          }
        })
        .then((res: any): any => {
          if (res.status === 200 && res.data.code === 200) {
            resolve(res.data)
          } else {
            resolve(
              res.data || {
                msg: '请求失败',
                status: 1
              }
            )
          }
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  public async delete(str: string, data: Map<string, any>): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .delete(`${this.ROOT_URL}${str}`, {
          params: data || {}
        })
        .then((res: any): any => {
          if (res.status >= 200 && res.status <= 300 && res.data.code === 200) {
            resolve(res.data)
          } else {
            // message.error(res.data.msg || '请求失败')
            resolve(
              res.data || {
                msg: '请求失败',
                status: 1
              }
            )
          }
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  public async put(
    str: string,
    data: Map<string, any>,
    paramsUrl: any = ''
  ): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      let url
      if (paramsUrl) {
        const querry = Util.makeQuery(data)
        url = `${this.ROOT_URL}${str}${querry}`
      } else {
        url = `${this.ROOT_URL}${str}`
      }
      this.http
        .put(url, data)
        .then((res: any): any => {
          if (res.status >= 200 && res.status <= 300 && res.data.code === 200) {
            resolve(res.data)
          } else {
            // message.error(res.data.msg || '请求失败')
            resolve(
              res.data || {
                msg: '请求失败',
                status: 1
              }
            )
          }
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  public async post(str: string, data: Map<string, any>): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .post(`${this.ROOT_URL}${str}`, data)
        .then((res: any): any => {
          if (res.status >= 200 && res.status <= 300 && res.data.code === 200) {
            resolve(res.data)
          } else {
            // message.error(res.data.msg || '请求失败')
            resolve(
              res.data || {
                msg: '请求失败',
                status: 1
              }
            )
          }
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}

const servicesMap: any = require.context('./', true, /\.ts$/)
const services:any = {}

servicesMap.keys().forEach((key: string) => {
  if (key.indexOf('index.ts') > -1) {
    if (key.indexOf('./index.ts') === -1) {
      const tmpKey: string = key
        .replace('./', '')
        .replace('/index.ts', 'Service')
      services[tmpKey] = servicesMap(key).default
    }
  }
})

export default services
