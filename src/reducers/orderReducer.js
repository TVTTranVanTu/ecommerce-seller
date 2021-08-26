import {
  ORDER_EDIT_FAIL,
  ORDER_EDIT_REQUEST,
  ORDER_EDIT_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/orderConstant";

export const listOrderReducer = (
  state = { loading: true, orders: {} },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_EDIT_REQUEST:
      return { loading: true };
    case ORDER_EDIT_SUCCESS:
      return { loading: false, success: true };
    case ORDER_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
