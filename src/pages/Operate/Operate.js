import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
    Layout, Menu, Icon,
  } from 'antd';
  import './Operate.css';

  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;


export default class Operate extends Component{

  constructor(props){
    super(props)
  }

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
                      <Menu.Item key="1">
                        <Link to="/operate/home" >SPU商品列表</Link>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />内容管理</span>}>
                    <Menu.Item key="2">
                        <Link to="/operate/single">单品专场推荐</Link>
                      </Menu.Item>
                      <Menu.Item key="3">主题专场管理</Menu.Item>
                      <Menu.Item key="4">广告管理</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>

                <Layout style={{ padding: '10px' }}>
                    <Content style={{
                      background: '#fff', padding: 10, margin: 0, minHeight: 280,
                    }}
                    >
                      {this.props.children}
                    </Content>
                  </Layout>

              </Layout>
              
            </div>
        );
    }

}