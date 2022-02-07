import { Button } from 'antd';
import './index.less'
import user from "../../store/user";
import { observer } from "mobx-react";

const Home = () => {
  /**state  state部分**/

  /**effect  effect部分**/

  /**methods 方法部分**/

  /**styles 样式部分**/

  /**render**/
  function changeName() {
    console.log(123123123);
    user.changeName();
  }

  return (
    <div>
        <div className="h-screen w-full flex flex-col items-center pt-32 px-2 bg-blue-50">
     <div className="p-4 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition-all">
       <header>
         <h1 className="text-6xl text-white font-bold cursor-default">
           TS React Starter
         </h1>
       </header>
     </div>
     <div className='home-top'>
       <span>{user.userName}</span>
       <Button onClick={() => changeName()}  type="primary" >改变名字</Button>
     </div>
   </div>
    </div>
  );
};

export default observer(Home);
