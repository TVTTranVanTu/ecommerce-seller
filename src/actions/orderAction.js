import orderApi from "../Api/orderApi";
import {
  ORDER_EDIT_FAIL,
  ORDER_EDIT_REQUEST,
  ORDER_EDIT_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/orderConstant";

export const listOrder = (id, status, params) => async (dispatch) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  try {
    const data = await orderApi.getAll(id, status, params);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};

export const editStatusAction = (id, status) => async (dispatch) => {
  dispatch({ type: ORDER_EDIT_REQUEST });
  try {
    const { data } = await orderApi.editStatus(id, status);
    dispatch({ type: ORDER_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_EDIT_FAIL, payload: error });
  }
};
