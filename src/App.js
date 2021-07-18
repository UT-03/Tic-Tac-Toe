import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Auxiliary/Auxiliary';
// import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import PlayerPreferencesPage from './Components/PlayerPreferencesPage/PlayerPreferencesPage';
import GamePage from './Components/GamePage/GamePage'

let TOTAL_TURNS = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDetails: [
        { name: 'Utkarsh', avatar: 'x' },
        { name: 'Tiwari', avatar: 'o' }
      ],
      gameArray: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
      winner: null,
      gameState: 1
    }
  }

  newGame = () => {
    this.setState({ gameState: 2 })
  }

  //Save data and start new game
  startNewGame = (data) => {
    TOTAL_TURNS = 0;

    let playerDetails$ = [...this.state.playerDetails];
    playerDetails$[0].name = data[0].name;
    playerDetails$[1].name = data[1].name;

    this.setState({
      playerDetails: playerDetails$,
      gameState: 3
    })
  }

  toggleCurrentPlayer = () => {
    if (this.state.currentPlayer === 1)
      this.setState({ currentPlayer: 2 })
    else if (this.state.currentPlayer === 2)
      this.setState({ currentPlayer: 1 })
  }

  checkresult = (k, l) => {
    let won = false;
    let flag = 1;
    let gameArray$ = [...this.state.gameArray];
    console.log(gameArray$);

    for (let i = 0; i < 3; i++) {
      if (gameArray$[i][l] !== this.state.currentPlayer) {
        flag = 0;
        break;
      }
    }
    if (flag === 1)
      won = true;
    else {
      flag = 1;
      for (let j = 0; j < 3; j++) {
        if (gameArray$[k][j] !== this.state.currentPlayer) {
          flag = 0;
          break;
        }
      }
      if (flag === 1)
        won = true;
      else {
        if (k === l) {
          flag = 1;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if ((i === j) && gameArray$[i][j] !== this.state.currentPlayer) {
                flag = 0;
                break;
              }
            }
          }
          if (flag === 1)
            won = true;
        }
        else if (k + l === 2) {
          flag = 1;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if ((i + j === 2) && gameArray$[i][j] !== this.state.currentPlayer) {
                flag = 0;
                break;
              }
            }
          }
          if (flag === 1)
            won = true;
        }
      }
    }

    if (won === true) {
      this.setState({
        winner: this.state.currentPlayer,
        gameState: 6
      })
    }
    else if (TOTAL_TURNS === 9) {
      this.setState({
        gameState: 7
      })
    }
  }

  gridClicked = (i, j) => {
    TOTAL_TURNS++;
    console.log(TOTAL_TURNS);
    let gameArray$ = [...this.state.gameArray]
    gameArray$[i][j] = this.state.currentPlayer;

    this.setState({ gameArray: gameArray$ })
    this.checkresult(i, j);
    this.toggleCurrentPlayer();
  }

  reloadgame = () => {
    this.setState({
      gameArray: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
      winner: null,
      gameState: 3
    })
  }

  backToHome = () => {
    this.setState({
      playerDetails: [
        { name: null, avatar: 'x' },
        { name: null, avatar: 'o' }
      ],
      gameArray: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
      winner: null,
      gameState: 1
    })
  }

  render() {
    let layout = null;
    if (this.state.gameState === 1)
      layout = <HomePage startNewGame={this.newGame} />

    else if (this.state.gameState === 2)
      layout = <PlayerPreferencesPage backToHome={this.backToHome} startNewGame={this.startNewGame} />

    else if (this.state.gameState === 3)
      layout = <GamePage
        playerDetails={this.state.playerDetails}
        currentPlayer={this.state.currentPlayer}
        gridClicked={this.gridClicked}
        gameArray={this.state.gameArray}
        reloadGame={this.reloadgame}
        backToHome={this.backToHome} />

    return (
      <Aux>
        {layout}
      </Aux>
    )
  }
}

export default App;