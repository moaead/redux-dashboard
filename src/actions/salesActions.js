import {ADD_SALE, CANCEL_SALE, RESET_SALES} from "../constants/salesConstants";


export function addSale() {
    return {
        type: ADD_SALE
    };
}

export function cancelSale() {
    return {
        type: CANCEL_SALE
    };
}

export function resetSales() {
    return {
        type: RESET_SALES
    };
}