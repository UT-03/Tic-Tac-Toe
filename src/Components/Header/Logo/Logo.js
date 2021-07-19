import React from 'react';
import styles from './Logo.module.css';
import image from '../../../Assets/logo.svg';

const logo=()=>{
    return(
        <div className={styles.Logo}>
            <img src={image} alt="Logo" className={styles.Image} />
            <div className={styles.Text}>Tic &diams; Tac &diams; Toe</div>
        </div>
    )
}

export default logo;