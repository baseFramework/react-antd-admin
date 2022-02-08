
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.less'

const Login = () => {
  /**state  state部分**/
  const navigate = useNavigate();

  /**effect  effect部分**/

  /**methods 方法部分**/
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
    navigate('/');

  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  /**styles 样式部分**/

  /**render**/
  // let a = 'var';

  return (
    <div className='login-page'>
      <div className="grid grid-rows-3 grid-flow-col gap-4 login-page-wrap">
        <div className="row-span-3 login-page-wrap">
          <div className="login-left" />
        </div>
        <div className="col-span-2 login-page-wrap login-box">
          <div className='login-page-title'>PADT 3.0 管理平台</div>
          <div className='login-page-form'>
            <Form
              autoComplete="off"
              initialValues={{ remember: true }}
              labelCol={{ span: 8 }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              wrapperCol={{ span: 16 }}
            >
              <Form.Item
                label="用户名称"
                name="用户名称"
                rules={[{ required: true, message: '请输入用户名称!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="用户密码"
                name="用户密码"
                rules={[{ required: true, message: '请输入用户密码!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="记住" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>请记住我</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button htmlType="submit" type="primary">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
