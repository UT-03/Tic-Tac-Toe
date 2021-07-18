import React from 'react';
import styles from './GameGrid.module.css'
import cross from '../../../../Assets/cross.svg'
import circle from '../../../../Assets/circle.svg'

const gameGrid = (props) => {
    let image = null;
    if (props.imageType === 1)
        image = <img className={styles.Image} src={cross} alt='Cross' />
    else if (props.imageType === 2)
        image = <img className={styles.Image} src={circle} alt='Circle' />

    return (
        <div className={styles.Grid} onClick={() => {
            if (image === null)
                props.gridClicked(props.index.i, props.index.j)
        }} >{image}</div>
    )
}

export default gameGrid;