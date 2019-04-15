import React, {Component} from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
const { Option } = Select;

export default class About extends Component{
    constructor(props){
        super(props)
        this.state = {};
    }

    render(){
        return (
            <div>
                我是about
            </div>
        );
    }

}