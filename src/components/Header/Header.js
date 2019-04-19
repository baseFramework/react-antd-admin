import React, { Component } from "react";
import { Menu, Icon } from "antd";
import Block from 'react-blocks';
import styles from '../../styles'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component {
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
    let { nested } = styles;
    return (
      <div>
        	<Block style={nested.transparent} layout>
            <Block style={[nested.common, nested.search]}>
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
            </Block>
            <Block style={nested.transparent} el="nav" layout flex justifyEnd>
              <Block style={nested.common} layout></Block>
            </Block>
				</Block>
       
      </div>
    );
  }
}
