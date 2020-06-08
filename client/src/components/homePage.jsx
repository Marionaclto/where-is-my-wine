import React from 'react';
import './homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <Container>
        <Row md={4} className='wine-list'>
          {this.state.wines.map(wine => (
          <Link to={`/search/${wine.id}`}>
            <Col><li key={wine.id}>
              <p className='wine-title'>{wine.name}</p>
              <div><img src={wine.image} alt={wine.name} className='wine-image'></img></div>
            </li></Col>
          </Link>
        ))}
        </Row>
        
      </Container>
    );
  }
}

export default Home;