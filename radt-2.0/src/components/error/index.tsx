import React from 'react'
import { Result, Button } from 'antd'
import { withRouter } from 'react-router-dom'
/* 
  调用方式：
  <ErrorBoundary render={ (error,errorInfo) => <p>{ '加载时发生错误' }</p> }>
      <Children />
  </ErrorBoundary>
*/
// interface ErrorProps {
//   render: (error: any, errorInfo: any) => React.ReactNode
// }

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }
  /**
   * 方案一：生命周期函数
   * 子元素发生错误时触发
   */
  public componentDidCatch(error: any, errorInfo: any) {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
    this.setState({
      hasError: true,
      error,
      errorInfo
    })
  }
  /* 方案二：静态函数 */
  // public static getDerivedStateFromError(error: any) {
  //   console.log('error', error)
  //   return {
  //     hasError: true,
  //     error
  //   }
  // }
  public componentWillUnmount() {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }
  public back = () => {
    this.props.history.goBack()
  }
  public render() {
    if (this.state.hasError) {
      return (
        // <div>{this.props.render(this.state.error, this.state.errorInfo)}</div>
        <Result
          status="500"
          subTitle="加载时发生错误"
          extra={
            <Button onClick={this.back} type="primary">
              返回
            </Button>
          }
        />
      )
    }
    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
