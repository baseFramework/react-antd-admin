import React from 'react';
import './App.css';
import './block.less';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Block from 'react-blocks';
import styles from './styles';



const AppFooter = () => {
	let { footer } = styles;
  return (
		<Block style={footer.block} el="footer" layout>
			<Block style={footer.p} el="p" flex>
				Github page built using React and Blocks :)
			</Block>
			<Block style={footer.p} el="p" flex>
				MIT &copy; <a href="http://whoisandie.com">whoisandie</a>
			</Block>
		</Block>
	);
}


const AppNested = () => {
	let { nested } = styles;
	return (
		<div className="nested">
			<Block className="demo" layout vertical wrap>
				<Block style={nested.transparent} layout>
					<Block style={nested.common}>Brand</Block>
					<Block style={[nested.common, nested.search]}>Searchbar</Block>
					<Block style={nested.transparent} el="nav" layout flex justifyEnd>
						<Block style={nested.common} layout>Navigation</Block>
					</Block>
				</Block>
				<Block style={nested.transparent} layout flex>
					<Block style={nested.sidebar} layout vertical>
						<Block style={nested.common} flex>Categories</Block>
						<Block style={nested.common}>Settings</Block>
					</Block>
					<Block style={nested.transparent} layout vertical flex>
						<Block style={nested.common}>Dashboard Graph</Block>
						<Block style={[nested.transparent, nested.widget]} layout>
							<Block style={nested.common} flex>Widget</Block>
							<Block style={nested.common} flex>Widget</Block>
							<Block style={nested.common} flex>Widget</Block>
						</Block>
						<Block style={nested.common} flex>Dashboard Content</Block>
					</Block>
				</Block>
				<Block style={nested.common}>Footer</Block>
			</Block>
		</div>
	);
};


const App = () => (
  <Router>
  <div>
    <Header>
    </Header>
    <Route exact path="/" component={Home} /> 
    <Route exact path="/about" component={About} />
    <AppFooter />
  </div>
</Router>
);

export default App;