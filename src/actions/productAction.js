import productAPI from "../Api/productApi";
import {
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/productContant";

export const listProductsAction = (param) => async (dispatch, getstate) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getstate();
  const id = userInfo.userDto.id;
  try {
    const data = await productAPI.getAll(id, param);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const addProductAction = (product) => async (dispatch, getstate) => {
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

export const updateProduct = (id, product) => async (dispatch) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  try {
    const { data } = await productAPI.update(id, product);
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST, payload: id });
  try {
    const { data } = await productAPI.delete(id);
    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};

export const detailProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: id });
  try {
    const data = await productAPI.getDetailProduct(id);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
