import {ADD_SALE, CANCEL_SALE, RESET_SALES} from "../constants/salesConstants";

const initialState = {
    salesCount: 0
};

export default function salesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SALE:
            return Object.assign({}, state, {
                salesCount: state.salesCount + 1
            });

        case CANCEL_SALE:
            return Object.assign({}, state, {
                salesCount: state.salesCount - 1
            });
        case RESET_SALES:
            return Object.assign({}, state, {
                salesCount: 0
            });

        default:
            return state;
    }
}
