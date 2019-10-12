import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import Likes from './likes';


const CustomCard = styled(Card)`
	&&& {
		height: 60px;
		width: 200px;
		margin: 1%;
		padding: 10px;
		border: 1px solid black;
		background-color: white;

		&:hover {
			background-color: grey;
		}
	}

	`


class PlayerCard extends Component {
	constructor(){
		super()
		this.state ={
			detail: []
		}
	}

	render(){

		return(

			<CustomCard>
				<Card.Content>
					<Card.Header> Name: {this.props.detail.name} </Card.Header>
					<Card.Meta> Popularity Score: {this.props.detail.searches} </Card.Meta>
					<Card.Description> Country: {this.props.detail.country} </Card.Description>
					<Card.Description><Likes tag={this.props.detail.name}/></Card.Description>
				</Card.Content>
			</CustomCard>


			)
	}
}

export default PlayerCard;