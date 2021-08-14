import {
  SHOP_INFOR_FAIL,
  SHOP_INFOR_REQUEST,
  SHOP_INFOR_SUCCESS,
  UPDATE_INFOR_FAIL,
  UPDATE_INFOR_REQUEST,
  UPDATE_INFOR_SUCCESS,
} from "../constants/shopContant";

export const shopInforReducer = (
  state = { loading: true, shopInf: {} },
  action
) => {
  switch (action.type) {
    case SHOP_INFOR_REQUEST:
      return { loading: true };
    case SHOP_INFOR_SUCCESS:
      return { loading: false, shopInf: action.payload };
    case SHOP_INFOR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateShopReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_INFOR_REQUEST:
      return { loading: true };
    case UPDATE_INFOR_SUCCESS:
      return { loading: false, success: true, shopinf: action.payload };
    case UPDATE_INFOR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
