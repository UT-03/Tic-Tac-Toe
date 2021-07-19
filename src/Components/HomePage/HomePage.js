import React from 'react';
import styles from './HomePage.module.css';
import Header from '../Header/Header';
import Aux from '../../hoc/Auxiliary/Auxiliary';
// import ControlButtons from '../ControlButtons/ControlButtons';
import Button from '../../UI/Button/Button';

const homePage = (props) => {
    return (
        <Aux>
            <Header type={1} />
            <div className={styles.Wrapper}>
                <div className={styles.HomeBox}>
                    <h1 className={styles.heading1}>Welcome!</h1>
                    <h2 className={styles.heading2}>Let's play!</h2>
                    {/* <div className={styles.buttons}><ControlButtons startNewGame={props.startNewGame} type={1} /></div> */}
                    <Button clicked={props.startNewGame} type={1}>Start Game</Button>
                </div>
            </div>
        </Aux>
    )
}

export default homePage;