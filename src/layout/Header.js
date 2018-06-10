import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {logoutUser} from "../actions/authActions";
import {connect} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import {resetSales} from "../actions/salesActions";

class Header extends Component {
    static propTypes = {
        auth: PropTypes.object,
        logoutUser: PropTypes.func,
        resetSales: PropTypes.func
    };

    logoutUser = () => {
        const {logoutUser, resetSales} = this.props;
        localStorage.removeItem("user");
        logoutUser();
        resetSales();
    };

    loggedInMenuItems = () => (
        <Fragment>
            <LinkContainer to="/">
                <NavItem eventKey={1}>
                    Dashboard
                </NavItem>
            </LinkContainer>

            <NavItem eventKey={2} onClick={this.logoutUser}>
                Logout
            </NavItem>

        </Fragment>
    );

    loggedOutMenuItems = () => (
        <LinkContainer to="/login">
            <NavItem eventKey={1}>
                Login
            </NavItem>
        </LinkContainer>
    );

    render() {
        const {user} = this.props.auth;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a>Redux Dashboard</a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {user && this.loggedInMenuItems()}
                        {!user && this.loggedOutMenuItems()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect(state => ({
    auth: state.auth
}), dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    resetSales: () => dispatch(resetSales())
}))(Header);
