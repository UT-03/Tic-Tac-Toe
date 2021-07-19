import React from 'react';
import styles from './PlayerPreferencesPage.module.css';
import Button from '../../UI/Button/Button';
import Players from './Players/Players'

let data = [
    { name: 'Player 1' },
    { name: 'Player 2' }
];

const collectData = (event, index) => {
    data[index].name = event.target.value;
}

const playerPreferencesPage = (props) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <Players changed={collectData} />
                <div className={styles.buttons}>
                    <Button clicked={() => props.startNewGame(data)} type={1}>Start</Button>
                    <Button clicked={() => {
                        props.backToHome();
                        data[0].name = 'Player 1';
                        data[1].name = 'Player 2';
                    }}
                        type={2}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default playerPreferencesPage;