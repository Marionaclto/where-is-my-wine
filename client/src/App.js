import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import './App.css';
import Home from './components/homePage';
import End from './components/restaurantResults'

class App extends React.Component {
  state = {
    path : '/'
  }

  handleOnClick = path => {
		this.setState({ path });
	};

  render() {

    return(
      <div className="App">
        <BrowserRouter>
          <NavLink to='/'>Home</NavLink>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={End}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
