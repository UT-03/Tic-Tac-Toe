import React from 'react';
import styles from './HomePage.module.css';
import Header from '../Header/Header';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ControlButtons from '../ControlButtons/ControlButtons';

const homePage = (props) => {
    return (
        <Aux>
            <Header type={1} />
                <div className={styles.HomeBox}>
                    <h1 className={styles.heading1}>Welcome!</h1>
                    <h2 className={styles.heading2}>Let's play Tic-Tac-Toe</h2>
                    <p className={styles.message}>1 player mode is still under development. So you'll need 2 players to play this game.</p>
                    <div className={styles.buttons}><ControlButtons type={1} /></div>
                </div>
        </Aux>
    )
}

export default homePage;