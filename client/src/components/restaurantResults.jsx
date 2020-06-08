import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './restaurantResults.css'

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const center = {
    lat: 41.729284,
    lng: 1.822515
}

class RestaurantResults extends React.Component {
    
    state = {
        restaurants : []
    }

    componentDidMount() {
        const wineId = this.props.match.params.wineId
        fetch(`http://localhost:3001/api/restaurantByWineId/${wineId}`)
          .then(response => response.json())
          .then(response => {
            this.setState({
              restaurants : response
            })
        })
    }

    render() {
        return(
            <Container >
                <Row>
                    <Col className='map'>
                        <Map  google={this.props.google} zoom={7} initialCenter={center}>
                            {this.state.restaurants.map((restaurant, index) => (
                                <Marker key={restaurant.id} position={{lat:restaurant.latitude, lng:restaurant.longitude}} />
                            ))}
                        </Map>
                    </Col>
                    <Col>
                        <ul>
                            {this.state.restaurants.map(restaurant =>(
                                <li key={restaurant.id}>{restaurant.name}, {restaurant.city}, {restaurant.phone}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default GoogleApiWrapper({
    apiKey,
}) (RestaurantResults)