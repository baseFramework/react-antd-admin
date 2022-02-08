
import "./App.less";
import Router from "./routers";
function App() {
  return (
    <div className="App">
      {/*组件中只要使用了lazy懒加载组件 那么就必须用Suspense组件包裹  显示加载时这段时间的显示效果 否则react报错 页面无法正常显示 用于性能优化 在被包裹的组件 */}
      {/*如果没有用懒加载 或者异步操作（例如数据请求） 当然就没必要用它了 太快了会闪屏 后续找找解决办法*/}
        <Router />
    </div>
  );
}

export default App;



// import React, { FC } from 'react';
// import { Button } from 'antd';
// import './App.less';


// const App: FC = () => (
//   <div className="h-screen w-full flex flex-col items-center pt-32 px-2 bg-blue-50">
//     <div className="p-4 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition-all">
//       <header>
//         <h1 className="text-6xl text-white font-bold cursor-default">
//           TS React Starter
//         </h1>
//       </header>
//     </div>
//     <div className='app-top'>
//       <Button type="primary">Button</Button>
//     </div>
//   </div>
// );

// export default App;


// import * as React from 'react'
// import { inject, observer } from 'mobx-react'
// import { observable } from 'mobx'
// import { LoaderStore } from './stores/modules/loader'
// import { ConfigProvider } from 'antd'
// import zh_CN from 'antd/lib/locale-provider/zh_CN'
// import Router from './routers';

// @inject('loaderStore', 'userStore')
// @observer
// class App extends React.Component<any, any> {
//   @observable public loaderStore: LoaderStore

//   constructor(props: any) {
//     super(props)
//     this.loaderStore = props.loaderStore
//     if (!props.userStore.getAccount()) {
//       if (location.pathname !== '/login') {
//         location.replace('/login')
//       }
//     }
//   }

//   public render() {
//     return (
//       <ConfigProvider locale={zh_CN}>
//         <div className="app">
//           {this.props.children}
//           <div
//             className={`loading-box ${
//               this.loaderStore.getLoading ? 'show' : ''
//             }`}
//           >
//             <Router/>
//           </div>
//         </div>
//       </ConfigProvider>
//     )
//   }
// }

// export default App
