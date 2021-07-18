import React from 'react';
import styles from './GamePage.module.css';
import Header from '../Header/Header'
import Aux from '../../hoc/Auxiliary/Auxiliary';
import CurrentPlayerDisplay from './CurrentPlayerDisplay/CurrentPlayerDisplay';
import GameGrids from './GameGrids/GameGrids';

const gamePage = (props) => {
    return (
        <Aux>
            <Header type={2} reloadGame={props.reloadGame} backToHome={props.backToHome} />
            <div className={styles.GameBox}>
                <CurrentPlayerDisplay
                    playerDetails={props.playerDetails}
                    currentPlayer={props.currentPlayer} />
                    
                <GameGrids gridClicked={props.gridClicked} gameArray={props.gameArray} />
            </div>
        </Aux>
    )
}

export default gamePage;