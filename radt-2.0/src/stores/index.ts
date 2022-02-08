const stores: object = {}

const StoreClass: object = {}

const files: any = require.context('./modules/', true, /\.ts$/)

files.keys().forEach((item: any) => {
  const tmpLkey: any = item.split('/')[item.split('/').length - 1].replace(/\.ts/g, 'Store')
  stores[tmpLkey] = files(item).default
})

export default stores

export {
  StoreClass
}