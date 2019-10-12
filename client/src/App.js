import React, { Component } from 'react';
import axios from 'axios';
import PlayerCard from './components/playerCard'
import './App.css';
// import DarkModeToggler from "./components/darkModeToggler";

// function App() {
//   return (
//     <div className="App">
//       <h1> Women's Soccer </h1>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super()
    this.state = {
      number: 20,
      allPlayers: []
    }
  }

  componentDidMount(){
    this.fetchPlayers()
  }


  fetchPlayers = () =>{
    axios.get('http://localhost:5000/api/players')
      .then((resp)=> {
        this.setState({
          allPlayers: resp.data
        })
      })
      .catch((err)=>console.log('error: ', err))
  }

  render(){
    return(
      <div className="App">
        <h1> Women's World Cup Soccer Players </h1>
        <div className="container">
          <div className="players">
            {this.state.allPlayers.map((player,index) =>{
              return(
                <div className="user-card" key={index}>
                  <PlayerCard detail={player} />
                </div>
                )
            })}
          </div>
        </div>
      </div>
      )
  }

}

export default App;


