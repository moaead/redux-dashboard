import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";

class Main extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    render() {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
