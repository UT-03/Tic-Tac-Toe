import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    let buttonClasses = [styles.Button]

    // Button types:-
    // 1-blue-new/start/save
    // 2-dirty white-cancel
    // 3-red-exit
    // 4-yellow-load

    if (props.type === 1)
        buttonClasses.push(styles.Blue)
    else if (props.type === 2)
        buttonClasses.push(styles.DirtyWhite)
    else if (props.type === 3)
        buttonClasses.push(styles.Red)
    else if (props.type === 4)
        buttonClasses.push(styles.Yellow)

    return (
        <button className={buttonClasses.join(' ')}
            onClick={props.clicked}>{props.children}</button>
    )
}

export default button;