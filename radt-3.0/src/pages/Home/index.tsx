/* eslint-disable react/jsx-no-undef */
// import { Button } from 'antd';
import { Layout, Menu } from 'antd';
import './index.less'
import user from "../../store/user";
import home from "../../store/home";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { toJS } from 'mobx';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React from 'react';

const { Header, Sider, Content } = Layout;


const Home = () => {
  /**state  state部分**/

  /**effect  effect部分**/
  useEffect(() => {
    user.fetchUserList();
  }, []);
  /**methods 方法部分**/

  const toggle = () => {
    home.toggle();
  }
  /**styles 样式部分**/

  /**render**/
  // function changeName() {
  //   console.log(123123123);
  //   user.changeName();
  // }

  console.log('user result:==>', toJS(user.userResult));

  return (
    <div className='home-page'>
      <Layout className='warpper'>
        <Sider collapsed={home.collapsed} collapsible trigger={null}>
          <div className="logo">
            RADT 3.0
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
            <Menu.Item icon={<UserOutlined />} key="1">
              Demo
            </Menu.Item>
            <Menu.Item icon={<VideoCameraOutlined />} key="2">
              404
            </Menu.Item>
            <Menu.Item icon={<UploadOutlined />} key="3">
              Help
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(home.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default observer(Home);
