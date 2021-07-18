import React from 'react';
import styles from './CurrentPlayerDisplay.module.css';
import circle from '../../../Assets/circle.svg'
import cross from '../../../Assets/cross.svg'

const currentPlayerDisplay = (props) => {
    let playerName = props.playerDetails[props.currentPlayer - 1].name;
    let playerNumber = props.currentPlayer;
    let avatar = null;

    if (playerNumber === 1)
        avatar = <img src={cross} alt="Cross" className={styles.Image} />;
    else if (playerNumber === 2)
        avatar = <img src={circle} alt="Circle" className={styles.Image} />;

    return (
        <div className={styles.CurrentPlayerDisplay}>
            <div className={styles.PlayerName}>{playerName}'s turn</div>
            <div className={styles.Avatar}>{avatar}</div>
        </div>
    )
}

export default currentPlayerDisplay;