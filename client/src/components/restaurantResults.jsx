import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY


class End extends React.Component {
    
    state = {
        restaurants : []
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/restaurants/:wineId`)
          .then(response => response.json())
          .then(response => {
            this.setState({
              restaurants : response
            })
        })
    }

    render() {
        return(
            <div><h1>helo</h1></div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey,
}) (End)