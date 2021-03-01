/* 主页面路由组件 */
import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Loadable from 'react-loadable'
import { LoadableLoading } from 'src/components/loading'
const Home = Loadable({
  loader: () => import('./home'),
  loading: LoadableLoading
})
const notFound = Loadable({
  loader: () => import('src/components/error/404'),
  loading: LoadableLoading
})

class MainRoute extends React.Component<any, {}> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    const location = this.props.location
    const { pathname } = location
    return (
      <TransitionGroup className="main-route">
        <CSSTransition
          key={pathname.split('/')[2]}
          timeout={{ enter: 1000, exit: 0 }}
          classNames={'fade'}
        >
          <Switch location={location}>
            <Route path="/main/home" component={Home} />
            <Route path="/main/404" component={notFound} />
            <Redirect to="/main/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default MainRoute
