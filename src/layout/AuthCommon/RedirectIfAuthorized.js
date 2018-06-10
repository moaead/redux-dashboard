import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {PATH_NAME} from "../../utils/enums/pathname";

class RedirectIfAuthorized extends Component {
    render() {
        if (this.props.auth.user) {
            return (
                <Redirect to={{pathname: PATH_NAME.DASHBOARD}}/>
            );
        }

        return this.props.children;
    }
}

RedirectIfAuthorized.propTypes = {};
RedirectIfAuthorized.defaultProps = {};

export default withRouter(connect(state => ({
    auth: state.auth
}), dispatch => ({}))(RedirectIfAuthorized));
