import React, {Component} from 'react';
import { Form, Select, Row, Col } from 'antd';
import './Home.css';


const { Option } = Select;


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {};
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
            </div>
        );
    }

}