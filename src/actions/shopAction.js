import shopApi from "../Api/shopApi";
import {
  SHOP_INFOR_FAIL,
  SHOP_INFOR_REQUEST,
  SHOP_INFOR_SUCCESS,
  UPDATE_INFOR_FAIL,
  UPDATE_INFOR_REQUEST,
  UPDATE_INFOR_SUCCESS,
} from "../constants/shopContant";

export const shopInforAction = () => async (dispatch, getstate) => {
  dispatch({ type: SHOP_INFOR_REQUEST });
  const {
    userSignin: { userInfo },
  } = getstate();
  const id = userInfo.userDto.id;
  try {
    const data = await shopApi.getShopInfor(id);
    dispatch({ type: SHOP_INFOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOP_INFOR_FAIL, payload: error.message });
  }
};

export const updateInforAction = (shopinf) => async (dispatch, getstate) => {
  dispatch({ type: UPDATE_INFOR_REQUEST });
  const {
    userSignin: { userInfo },
  } = getstate();
  const id = userInfo.userDto.id;
  try {
    const data = await shopApi.updateShop(shopinf, id);
    console.log(data);
    dispatch({ type: UPDATE_INFOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_INFOR_FAIL, payload: error.message });
  }
};
