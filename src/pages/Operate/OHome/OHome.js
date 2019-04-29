import React, {Component} from 'react';
import {
    Form, Icon, Input, Button,Table
  } from 'antd';



  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

export default class OHome extends Component{
    constructor(props){
        super(props)
    }
    state={
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    }

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      }

      onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }


    render(){
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };

        return (
            <div>
               <Form layout="inline">
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                    <Button
                        type="primary"
                    >
                        search
                    </Button>
                    </Form.Item>
                </Form>

                <Table columns={columns} dataSource={data} style={{marginTop:'20px'}}/>
            </div>
        );
    }

}