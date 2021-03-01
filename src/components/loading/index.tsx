import * as React from 'react'
import { Spin } from 'antd'
import * as Loadable from 'react-loadable'

export default class Loading extends React.Component<{}, {}> {
  public render () {
    return (<Spin tip="加载中，请稍后..." spinning />)
  }
}

export class LoadableLoading extends React.Component<Loadable.LoadingComponentProps, {}> {
  public render () {
    const loadComponent: React.ReactElement = (
      <div className="spin-main">
        <Spin tip="加载中，请稍后..." spinning delay={300} />
      </div>
    )
    if (this.props.error) {
      console.log(this.props.error)
    }
    return this.props.pastDelay ? loadComponent : null
  }
}