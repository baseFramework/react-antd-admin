import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './pages/App'
import registerServiceWorker from './pwa/registerServiceWorker'
import AppRouter from './routers'
import stores from './stores'
import services from './services'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import 'antd/dist/antd.css'
import './styles/stylus/index.styl'

ReactDOM.render(
  <Provider {...stores} {...services}>
    <App>
      <AppRouter />
    </App>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
