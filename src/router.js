import React, { Component } from "react";
import {Route,Switch} from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Operate from './pages/Operate/Operate'
import OHome from './pages/Operate/OHome/OHome'
import Single from './pages/Operate/Single/Single'


export default class MyRouter extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
        <Switch>
            <Route  path="/" exact component={Home} /> 
            <Route  path="/about" exact component={About} />
            <Route  path="/operate" render={()=>
                <Operate>
                    <Switch>
                            <Route path="/operate/home" component={OHome} />
                            <Route path="/operate/single" component={Single} />
                    </Switch>
                </Operate>
            }/>
        </Switch>
    );
  }
}
