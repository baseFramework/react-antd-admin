/* eslint-disable jsx-a11y/alt-text */
import img404 from '../../assets/images/404.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './index.less';

const NotFound = () => {
  /**state  state部分**/
  const navigate = useNavigate();

  /**effect  effect部分**/

  /**methods 方法部分**/

  /**styles 样式部分**/

  /**render**/
  const onLogin = () => {
    navigate('/login');
  };

  return (
    <div className='notfound-page'>
      <div className='notfound-img'>
        <img src={img404} />
        <span>没有找到该页面</span>
      </div>
      <div className='notfound-btn' >
        <Button onClick={()=>{onLogin()}} type="primary">返回登录</Button>
      </div>
    </div>
  );
};

export default NotFound;
