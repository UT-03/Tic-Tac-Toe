import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Auxiliary/Auxiliary';
// import Header from './Components/Header/Header';
// import HomePage from './Components/HomePage/HomePage';
import PlayerPreferencesPage from './Components/PlayerPreferencesPage/PlayerPreferencesPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDetails: [
        { name: null, avatar: 'x' },
        { name: null, avatar: 'o' }
      ],
      gameState: 1
    }
  }
  render() {
    return (
      <Aux>
        {/* <Header type={2}></Header> */}
        {/* <HomePage /> */}
        <PlayerPreferencesPage />
      </Aux>
    )
  }
}

export default App;