import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    SUBCATEGORY_LIST_FAIL,
    SUBCATEGORY_LIST_REQUEST,
    SUBCATEGORY_LIST_SUCCESS
} from "../constants/categoryContant";


export const categoryListReducer = (
    state = { loading: true, categorys: [] }, action
) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true }
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categorys: action.payload }
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const subCategoryListReducer = (
    state = { loading1: true, subCategories: [] }, action
) => {
    switch (action.type) {
        case SUBCATEGORY_LIST_REQUEST:
            return { loading1: true }
        case SUBCATEGORY_LIST_SUCCESS:
            return { loading1: false, subCategories: action.payload }
        case SUBCATEGORY_LIST_FAIL:
            return { loading1: false, err: action.payload }
        default:
            return state;
    }
};
