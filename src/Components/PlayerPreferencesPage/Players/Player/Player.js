import React from 'react';
import styles from './Player.module.css';

const player = (props) => {
    return (
        <div className={styles.Player}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} onChange={(event) => props.changed(event, props.id)} placeholder={props.label} />
        </div>
    )
}

export default player;