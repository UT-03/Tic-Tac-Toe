import React from 'react';
import styles from './GameGrids.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import GameGrid from './GameGrid/GameGrid';

const gameGrids = (props) => {

    let grids = null;

    grids = props.gameArray.map((a, i) => {
        return <Aux key={i}>
            {
                a.map((b, j) => {
                    return <GameGrid gridClicked={props.gridClicked} imageType={b} key={j} index={{ i, j }} />
                })
            }
        </Aux>
    })
    return (
        <div className={styles.GameGrids}>{grids}</div>
    )
}

export default gameGrids;