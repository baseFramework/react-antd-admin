import React, { Component } from "react";
import { Menu, Layout } from "antd";
import './Header.css'
import { Link } from 'react-router-dom';
import HeadData from '../../datas/HeaderData'



const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Menus = HeadData.menus;

export default class ComHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        current: 'home',
    };
  }

  componentDidMount(){
    let _me = this;
    let currentPath = window.location.pathname;
    for(let i = 0; i < Menus.length; i++){
      if(currentPath.indexOf(Menus[i].path) > -1){
        _me.setState({
          current: Menus[i].key,
        });
      }
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });

  }

  render() {

    let menus = [];
    for(let i = 0; i < Menus.length; i++){
      menus.push(
          <Menu.Item key={Menus[i].key}>
              <Link to={Menus[i].path}>{Menus[i].title}</Link>
          </Menu.Item>)
    }

    return (
      <div>
        	<Header>
            <div className="logo" />
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
              {menus}
            </Menu>
            </Header>
      </div>
    );
  }
}
