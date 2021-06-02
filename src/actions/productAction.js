import productAPI from "../Api/productApi";
import { PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS } from "../constants/productContant";

export const addProducts = (product) => async (dispatch, getstate) => {
    dispatch({
        type: PRODUCT_ADD_REQUEST
    });
    const { userSignin: { userInfo }, } = getstate();
    const token = userInfo.jwttoken
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