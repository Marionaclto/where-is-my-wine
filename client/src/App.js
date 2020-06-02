import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    wines: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/wines')
      .then(response => response.json())
      .then(response => {
        this.setState({
          wines : response
        })
      })
  }

  render() {

    return(
      <div className="App">
        {this.state.wines.map(wine => (
          <li key={wine.id}><img src={wine.image} alt={wine.name}></img></li>
        ))}
      </div>
    );
  }
}

export default App;
