import productAPI from '../Api/productApi';
import {
    PRODUCT_ADD_FAIL,
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
} from '../constants/productContant';

export const listProductsAction = () => async (dispatch, getstate) => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const {
        userSignin: { userInfo },
    } = getstate();
    const id = userInfo.userDto.id;
    try {
        const data = await productAPI.getAll(id);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message,
        });
    }
};

export const addProducts = (product) => async (dispatch, getstate) => {
    dispatch({
        type: PRODUCT_ADD_REQUEST,
    });
    const {
        userSignin: { userInfo },
    } = getstate();
    const token = userInfo.jwttoken;
    try {
        const data = await productAPI.addProduct(product, token);
        dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_ADD_FAIL,
            payload: error.message,
        });
    }
};

export const updateProduct = (product) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
    const {
        userSignin: { userInfo },
    } = getState();
    const token = userInfo.jwttoken;
    try {
        const { data } = await productAPI.update(product, token);
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
    }
};
