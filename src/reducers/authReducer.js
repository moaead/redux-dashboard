import {LOGIN_USER, LOGOUT_USER} from "../constants/authConstants";

const initialState = {
    user: undefined
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {
                user: action.user
            });

        case LOGOUT_USER  :
            return Object.assign({}, state, {
                user: null
            });

        default:
            return state;
    }
}
