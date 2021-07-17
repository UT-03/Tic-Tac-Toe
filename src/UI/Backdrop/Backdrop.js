import React from 'react';
import styles from './Backdrop.module.css';

const backdrop=(props)=>{
    let backdropClasses=[styles.Backdrop]

    if(props.show)
    backdropClasses.push(styles.Show)

    return(
        <div onClick={props.clicked}
         className={backdropClasses.join(' ')}></div>
    )
}

export default backdrop;