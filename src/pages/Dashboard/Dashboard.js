import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addSale, cancelSale} from "../../actions/salesActions";
import {Button} from "react-bootstrap";

class Dashboard extends Component {
    static propTypes = {
        sales: PropTypes.shape({
            salesCount: PropTypes.number
        }),
        addSale: PropTypes.func,
        cancelSale: PropTypes.func
    };

    render() {
        const {salesCount} = this.props.sales;
        const {addSale, cancelSale} = this.props;
        return (
            <div>
                <h2>Sales: {salesCount}</h2>
                <Button onClick={addSale}>Add 1 Sale</Button>
                <Button onClick={cancelSale} disabled={salesCount <= 0}>Cancel 1 Sale</Button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        sales: state.sales
    }),
    (dispatch, ownProps) => ({
        addSale: () => dispatch(addSale()),
        cancelSale: () => dispatch(cancelSale())
    })
)(Dashboard);
