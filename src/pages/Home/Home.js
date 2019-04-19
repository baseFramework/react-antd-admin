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
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">col-6</div>
                </Col>
              </Row>
            </div>
        );
    }

}