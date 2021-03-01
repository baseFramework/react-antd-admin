import * as React from 'react'
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import { UserStore } from 'src/stores/modules/user'

export interface HeaderProps {
  sigout: () => Promise<any>
}

@inject('userStore')
@observer
export default class HeaderNav extends React.Component<HeaderProps, {}> {

  public timeStamp: React.RefObject<any>
  public timer: any
  public userStore: UserStore

  constructor (props: any) {
    super(props)
    this.timeStamp = React.createRef()
    this.userStore = props.userStore
  }

  public sigout = () => {
    //  this.props.sigout()
     this.userStore.sigout()
  }

  public componentDidMount () {
    const update = () => {
      this.timeStamp.current.innerHTML = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }
    update()
    this.timer = setInterval(update, 1000)
  }

  public componentWillUnmount () {
    clearInterval(this.timer)
  }
 
  public render () {
    return (
      <div className="header-main">
        <div className="left-box">
          <div className="op-box">
            <i className="menu"></i>
            <span>菜单</span>
          </div>
        </div>
        <div className="mid-box">
          <div className="title">
            <i className="home-logo"></i>
              <span className="title-text">react-demo</span> 
          </div>
        </div>
        <div className="right-box">
            <span>
              <span className="place">{this.userStore.getAccount().name}</span>
            </span>       
          <span className="time" ref={this.timeStamp}>
          </span>
          <span className="logout" onClick={this.sigout}>退出</span>
        </div>
      </div>
    )
  }
}
