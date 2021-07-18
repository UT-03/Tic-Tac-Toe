import React from 'react';
import styles from './Players.module.css';
import Player from './Player/Player';

const players = (props) => {

    let playerDetails = [
        { id: 0, label: 'Player 1' },
        { id: 1, label: 'Player 2' }
    ]

    let playerList = playerDetails.map(player => {
        return <Player key={player.id} id={player.id} label={player.label} changed={props.changed} />
    })

    return (
        <div className={styles.Players}>{playerList}</div>
    )
}

export default players;