import { observer, inject } from 'mobx-react'
import * as React from 'react'
import { Menu, message } from 'antd'
import { RouteComponentProps } from 'react-router'
import { observable } from 'mobx'
import MainRoute from './route'
import HeaderNav from 'src/components/header'

import { UserService } from 'src/services/user'
import { UserStore } from 'src/stores/modules/user'

@inject('userService', 'userStore')
@observer
class Main extends React.Component<RouteComponentProps<{}>, {}> {
  public userService: UserService
  public userStore: UserStore

  @observable public menuList: any[] = []
  @observable public selectItem: string[]
  @observable public selectExpand: string[] = []

  constructor(props: any) {
    super(props)
    this.initConfig(props)
  }

  public initConfig(props: any): void {
    this.userService = props.userService
    this.userStore = props.userStore
  }

  public chooseMenu = async (item: any) => {
    //
  }

  public sigout = async (): Promise<any> => {
    const res = await this.userService.sigout()
    if (res.status === 0) {
      this.userStore.sigout()
    } else {
      message.error(res.msg || '操作失败')
    }
  }

  public render() {
    return (
      <div className="main">
        <HeaderNav sigout={this.sigout} />
        <div className="main-body">
          <div className="menu-slide"></div>
          <div>
            <Menu
              selectedKeys={this.selectItem}
              openKeys={this.selectExpand}
              mode="inline"
              theme="dark"
            >
              <Menu.Item
                onClick={this.chooseMenu.bind(this, '首页')}
                key={'首页'}
                title={'首页'}
              >
                <span className="menu-name">首页</span>
              </Menu.Item>
            </Menu>
          </div>
          <div className="right-body">
            <MainRoute {...this.props}></MainRoute>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
