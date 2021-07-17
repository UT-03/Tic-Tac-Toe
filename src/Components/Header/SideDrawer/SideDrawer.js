import React from 'react';
import styles from './SideDrawer.module.css';
import ControlButtons from '../../ControlButtons/ControlButtons';

const sideDrawer = (props) => {
    let sideDrawerClasses = [styles.SideDrawer]

    if (props.show)
        sideDrawerClasses.push(styles.Show)

    return (
        <div className={sideDrawerClasses.join(' ')}>
            <ControlButtons type={2} />
        </div>
    )
}

export default sideDrawer;