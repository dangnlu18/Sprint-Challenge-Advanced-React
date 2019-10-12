import React, { Component } from 'react';

class AddPlayers extends Component{
	constructor(){
		super()
		this.state = {
			number: 1
		}
	}

	onChange = (e) => {
		e.preventDefault()
		this.setState({
			number: 0
		})
	}

	handleSubmit = (e) => {
		this.setState({
			number: e.target.value
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input
				placeholder="Enter in number of players"
				type="number"
				value={this.state.number}
				onChange={this.handleChange}
				/>
				<button> Show Me! </button>
			</form> 
			)
	}
}