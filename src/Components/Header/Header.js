import React, { Component } from 'react';
import styles from './Header.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Logo from './Logo/Logo';
import ControlButtons from '../ControlButtons/ControlButtons';
import Burger from './Burger/Burger';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }

    toggleSideDrawer = () => {
        let prevState = this.state.showSideDrawer;
        let newState = !prevState;

        this.setState({ showSideDrawer: newState })

    }
    render() {
        // Header type:-
        // 1-when gameState is 1
        // 2-when gameState is 3
        let headerButtons = null;

        if (this.props.type === 1)
            headerButtons = <div className={styles.Buttons}>
                <ControlButtons type={1} />
            </div>
        else if (this.props.type === 2)
            headerButtons = <Aux>
                <div className={styles.Buttons}>
                    <ControlButtons type={2} />
                </div>
                <Burger clicked={this.toggleSideDrawer}
                    toggle={this.state.showSideDrawer} />
                <SideDrawer show={this.state.showSideDrawer} />
                <Backdrop clicked={this.toggleSideDrawer}
                show={this.state.showSideDrawer} />
            </Aux>

        return (
            <div className={styles.Header}>
                <Logo />
                {headerButtons}
            </div>
        )
    }
}

export default Header;