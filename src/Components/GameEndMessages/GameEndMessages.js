import React from 'react';
import styles from './GameEndMessages.module.css';
import Button from '../../UI/Button/Button';

const gameEndMessages = (props) => {
    let message = null;
    if (props.type === 4)
        message = <p>{props.winner} won</p>
    else if (props.type === 5)
        message = <p>It's a tie!</p>
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Box}>
                {message}
                <div className={styles.Buttons}>
                    <Button
                        clicked={props.playAgain}
                        type={1}>Play Again</Button>

                    <Button
                        clicked={props.exit}
                        type={3}>Exit</Button>
                </div>
            </div>
        </div>
    )
}

export default gameEndMessages;