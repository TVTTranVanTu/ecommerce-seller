import categoryApi from "../Api/categotyApi";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  SUBCATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
} from "../constants/categoryContant";

export const listCategory = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_LIST_REQUEST,
  });
  try {
    const data = await categoryApi.getAll();
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.message,
    });
  }
};
export const listSubCategory = (id) => async (dispatch) => {
  dispatch({
    type: SUBCATEGORY_LIST_REQUEST,
  });
  try {
    const data = await categoryApi.get(id);
    dispatch({ type: SUBCATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SUBCATEGORY_LIST_FAIL, payload: error.message });
  }
};
