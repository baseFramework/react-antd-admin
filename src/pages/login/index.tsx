import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd'
import { RouteComponentProps } from 'react-router'
import { UserService } from 'src/services/user'
import { UserStore } from 'src/stores/modules/user'

import './login.styl'

export interface LoginProps extends RouteComponentProps<{}> {
  form: any
  userService: UserService
  userStore: UserStore
}

@inject('userService', 'userStore')
@observer
class Login extends React.Component<LoginProps, {}> {
  public userService: UserService
  public userStore: UserStore

  constructor(props: any) {
    super(props)
    this.userService = props.userService
    this.userStore = props.userStore
  }

  public login = async (e: any): Promise<any> => {
    e.preventDefault()
    this.props.history.replace('/main/home')
    this.userStore.login({
      name: '张三',
      token: 'aaaa'
    })
    // this.props.form.validateFields(async (err: any, values: any) => {
    //   if (!err) {
    //     const putData: any = {
    //       ...values,
    //       remember: undefined
    //     }
    //     const res = await this.userService.sign(putData)
    //     if (res.status === 0) {
    //       message.success('登录成功')
    //       this.userStore.login(res.data)
    //       this.menuStore.reCache()
    //       this.props.history.replace('/main/home')
    //     } else {
    //       message.error(res.msg || '登录失败')
    //     }
    //   }
    // })
  }

  public render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <div>
        <div>
          <Form
      {...layout}
      name="basic"
    >
      <Form.Item
        label="Username"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={this.login}>
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)
