import * as React from 'react'
import { Result, Button } from 'antd'
import { RouteComponentProps } from 'react-router'
export default class NotFound extends React.Component<RouteComponentProps, {}> {
  constructor(props: any) {
    super(props)
  }

  public goBack = () => {
    this.props.history.goBack()
  }

  public render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉, 您访问的页面不存在，请联系系统管理员。"
        extra={
          <Button onClick={() => this.goBack()} type="primary">
            返回
          </Button>
        }
      />
    )
  }
}
