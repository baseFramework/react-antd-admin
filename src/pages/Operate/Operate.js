import React, {Component} from 'react';
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  import './Operate.css';


  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;


export default class Operate extends Component{

    render(){
        return (
            <div className="operate-page">
               <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          inlineCollapsed={false}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />商品管理</span>}>
            <Menu.Item key="1">SPU商品列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />内容管理</span>}>
            <Menu.Item key="2">单品专场推荐</Menu.Item>
            <Menu.Item key="3">主题专场管理</Menu.Item>
            <Menu.Item key="4">广告管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{
          background: '#fff', padding: 24, margin: 0, minHeight: 280,
        }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
            </div>
        );
    }

}