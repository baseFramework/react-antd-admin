import React from 'react';
import './App.css';
import './block.less';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ComHeader from './components/Header/Header'
import Block from 'react-blocks';
import styles from './styles';


const { Content, Footer } = Layout;



const AppLayout = () =>{
	return(
		<Layout className="layout">
			<ComHeader>
			</ComHeader>
		</Layout>
	)
}

const App = () => (
  <Router>
  <div>
	<AppLayout></AppLayout>
    <Route exact path="/" component={Home} /> 
    <Route exact path="/about" component={About} />
  </div>
</Router>
);

export default App;