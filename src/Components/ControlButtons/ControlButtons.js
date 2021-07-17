import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const controlButtons = (props) => {
    let but = null;

    if (props.type === 1)
        but = <Aux>
            <Button type={1}>New game</Button>
            <Button type={4}>Load game</Button>
        </Aux>

    else if (props.type === 2)
        but = <Aux>
            <Button type={1}>Save Game</Button>
            <Button type={3}>Exit Game</Button>
        </Aux>

    return(
        <Aux>{but}</Aux>
    )
}

export default controlButtons;