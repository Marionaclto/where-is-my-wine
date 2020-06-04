import React from 'react';
import './homePage.css';
import { Link } from 'react-router-dom'


class Home extends React.Component {
  state = {
    
    wines : []
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
      <div className="Home">
        <ul className='wine-list'>
          {this.state.wines.map(wine => (
          <Link to='/search'>
            <li key={wine.id} >{wine.name}
            <img src={wine.image} alt={wine.name} className='wine-image'></img>
            </li>
          </Link>
        ))}
        </ul>
        
      </div>
    );
  }
}

export default Home;