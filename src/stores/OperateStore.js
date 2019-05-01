
import { observable, computed, autorun, action } from 'mobx'



class operateStore {
    @observable list = [];

    @computed get getHomeList(){
        for (let i = 0; i < 46; i++) {
            this.list.push({
              key: i,
              name: `Edward King ${i}`,
              age: 3 + `${i}`,
              address: `London, Park Lane no. ${i}`,
            });
          }
          return this.list
    }

    // 添加用户数据
    @action 
    addTodo(item){
        this.list.push(item);
    }
}


export default new operateStore();