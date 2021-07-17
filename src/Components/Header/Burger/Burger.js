import React from 'react';
import styles from './Burger.module.css';

const burger=(props)=>{
    let burgerClasses=[styles.Burger]

    if(props.toggle)
    burgerClasses.push(styles.Toggle)

    return(
        <div onClick={props.clicked}
        className={burgerClasses.join(' ')}>
            <div className={[styles.Bar,styles.Bar1].join(' ')}></div>
            <div className={[styles.Bar,styles.Bar2].join(' ')}></div>
            <div className={[styles.Bar,styles.Bar3].join(' ')}></div>
        </div>
    )
}

export default burger;