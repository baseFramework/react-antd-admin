import React, {Component} from 'react';
import { Row, Col,Tabs } from 'antd';
import './Home.css';

import Linechart from '../../components/Linechart/Linechart'
import HomeData from '../../datas/HomeData'


const TabPane = Tabs.TabPane;

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
          linedata:HomeData.sevenday.data,
          linecol:HomeData.cols,
          line14data:HomeData.fourteenday.data
        };
    }

    orderChange(key){
      console.log('key:' + key);
    }

    render(){
        return (
            <div className="homepage">
              <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">
                    <div>今日销售订单</div>
                    <div>6</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                    <div>今日销售额</div>
                    <div>$50</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                    <div>今日发放佣金</div>
                    <div>$60.77</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                    <div>今日开单店主</div>
                    <div>6</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                    <div>今日下单店主</div>
                    <div>16</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                    <div>今日自购店主</div>
                    <div>19</div>
                  </div>
                </Col>
              </Row>

              <div className="data-content">
                <div>订单数据部分</div>
                <Tabs defaultActiveKey="7" onChange={this.orderChange}>
                  <TabPane tab="7天" key="7">
                    <Linechart linedata={this.state.linedata}  linecol={this.state.linecol}></Linechart>
                  </TabPane>
                  <TabPane tab="14天" key="14">
                     <Linechart linedata={this.state.line14data}  linecol={this.state.linecol}></Linechart>
                  </TabPane>
                  <TabPane tab="30天" key="30">Content of Tab Pane 3</TabPane>
                </Tabs>
              </div>

            </div>

            
        );
    }

}