import * as React from 'react'
import { inject, observer } from 'mobx-react';
import { UserStore } from 'src/stores/modules/user'
import { RouteComponentProps } from 'react-router';

interface HomePorps extends RouteComponentProps {
  userStore: UserStore
}

@inject('userStore')
@observer
export default class Home extends React.Component<HomePorps, {}> {  

  public userStore: UserStore

  constructor (props: any) {
    super(props)
    this.userStore = props.userStore
  }

  public render () {
    return (
      <div className="home-main">
        首页
      </div>
    )
  }
}