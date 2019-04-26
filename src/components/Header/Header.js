import React, { Component } from "react";
import { Menu, Layout } from "antd";
import './Header.css'


const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class ComHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        current: 'home',
    };
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        	<Header>
            <div className="logo" />
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
              概况
              </Menu.Item>
              <Menu.Item key="operate">
                运营
              </Menu.Item>
              <Menu.Item key="user">
                客户
              </Menu.Item>
              <Menu.Item key="system">
                系统
              </Menu.Item>
              <Menu.Item key="sale">
                营销
              </Menu.Item>
              <Menu.Item key="order">
                订单
              </Menu.Item>
            </Menu>
            </Header>
      </div>
    );
  }
}
