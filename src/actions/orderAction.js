import orderApi from "../Api/orderApi";
import {
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/orderConstant";

export const listOrder = (id, params) => async (dispatch) => {
  dispatch({ type: ORDER_LIST_REQUEST });
  try {
    const data = await orderApi.getAll(id, params);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};
