import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thuck from 'redux-thunk';
import {
    categoryListReducer,
    subCategoryListReducer
} from './reducers/categorysReducer';
import {
    addProductReducer,
    productListReducer,
    productUpdateReducer
} from './reducers/productReducer';
import {
    userSigninFBReducer,
    userSigninGGReducer,
    userSigninReducer,
    userUpdateReducer
} from './reducers/UserReducer';


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
};

const reducer = combineReducers(
    {
        productUpdate: productUpdateReducer,
        listProducts: productListReducer,
        productCreate: addProductReducer,
        userUpdate: userUpdateReducer,
        userSignin: userSigninReducer,
        userSigninGG: userSigninGGReducer,
        userSigninFB: userSigninFBReducer,
        subCategoryList: subCategoryListReducer,
        categoryList: categoryListReducer,
    }
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thuck)));

export default store;