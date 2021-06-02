import { PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS } from "../constants/productContant";

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_ADD_REQUEST:
            return { loading: true };
        case PRODUCT_ADD_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case PRODUCT_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};