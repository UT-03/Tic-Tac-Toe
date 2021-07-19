import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import reloadImage from '../../Assets/reload.svg'
import exitImage from '../../Assets/exit.svg'

const header = (props) => {
    // Header type:-
    // 1-when gameState is 1
    // 2-when gameState is 3
    let headerButtons = null;

     if (props.type === 2)
        headerButtons = <div className={styles.Buttons2}>
            <div onClick={props.reloadGame}><img title='Reload' src={reloadImage} className={[styles.Image, styles.reload].join(' ')} alt="reload" /></div>
            <div onClick={props.backToHome}><img title='Exit' src={exitImage} className={[styles.Image, styles.exit].join(' ')} alt="exit" /></div>
        </div>

    return (
        <div className={styles.Header}>
            <Logo />
            {headerButtons}
        </div>
    )
}


export default header;