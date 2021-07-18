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
        <div className={styles.Container}>
            <Players changed={collectData} />
            <div className={styles.buttons}>
                <Button clicked={() => props.saveData(data)} type={1}>Start</Button>
                <Button type={2}>Cancel</Button>
            </div>
        </div>
    )
}

export default playerPreferencesPage;