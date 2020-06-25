import React from 'react';
import './homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	state = {
		wines: [],
	};

	componentDidMount() {
		fetch('http://localhost:3001/api/wines')
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					wines: response,
				});
			});
	}
	render() {
		return (
			<Container fluid className='my-container'>
				<Jumbotron fluid className='my-jumbotron'></Jumbotron>
				<Row className='fixed-top'>
					<Col className='my-col'>
						<h1>Where Is My Wine?</h1>
						<h6>Find your favourite wines wherever you go</h6>
					</Col>
				</Row>

				<Row xs={1} md={2} lg={4} className='wine-list'>
					{this.state.wines.map((wine) => (
						<Link to={`/search/${wine.id}`}>
							<Col>
								<div className='card-flex'>
									<Card
										className='card'
										key={wine.id}
										style={{ width: '13rem' }}
									>
										{/* <li key={wine.id}> */}
										<div>
											<img
												src={wine.image}
												alt={wine.name}
												className='wine-image'
											></img>
											<footer className='wine-title'>{wine.name}</footer>
										</div>
										{/* </li> */}
									</Card>
								</div>
							</Col>
						</Link>
					))}
				</Row>
			</Container>
		);
	}
}

export default Home;
