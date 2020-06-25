import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/homePage';
import RestaurantResults from './components/restaurantResults';

class App extends React.Component {
	state = {
		path: '/',
	};

	handleOnClick = (path) => {
		this.setState({ path });
	};

	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/search/:wineId' component={RestaurantResults} />
					</Switch>
					<NavLink to='/'>
						<button className='home-button'>HOME</button>
					</NavLink>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
