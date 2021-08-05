import {
    PRODUCT_ADD_FAIL,
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_RESET,
    PRODUCT_UPDATE_SUCCESS
} from "../constants/productContant";

export const productListReducer = (
    state = { loading: true, products: [] }, action
) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_ADD_REQUEST:
            return { loading: true };
        case PRODUCT_ADD_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};