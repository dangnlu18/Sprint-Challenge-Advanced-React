import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'


const Likes = (props) =>{
	const [likes, setLikes] = useLocalStorage(`${props.tag}`, 0)

	const handleChange = (e) => {
		e.preventDefault()
		setLikes(likes+1)
		return likes

	}

	const handleReset = (e) => {
		e.preventDefault()
		setLikes(0)
		return likes

	}
	return(
		<div className='buttons'>
			<button onClick={handleChange}>
				Your Likes: {likes} 
			</button>
			<button onClick={handleReset}>Reset</button>
		</div>
		)
}

export default Likes