import React from 'react';
import './App.css';
import './block.less';
import { BrowserRouter as Router,} from "react-router-dom";
import { Layout,} from 'antd';
import ComHeader from './components/Header/Header'
import MyRouter from './router'
import { Provider } from 'mobx-react'

import store from './stores/index'




const AppLayout = () =>{
	return(
		<Layout className="layout">
			<ComHeader>
			</ComHeader>
		</Layout>
	)
}

const App = () => (
	<Provider {...store}>
		<Router>
					<AppLayout></AppLayout>
					<MyRouter></MyRouter>
		</Router>
	</Provider>

);
export default App;