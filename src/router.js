import React from 'react';
import AddProducts from './components/contents/productsManager/AddProducts';
import BannedProducts from './components/contents/productsManager/BannedProducts';
import ListProduct from './components/contents/productsManager/ListProducts';
import DashBoardPage from './pages/DashBoardPage';
import OrderPage from './pages/OrderPage';
import ProductManage from './pages/ProductManage';


const routes = [

    {
        path: '/',
        exact: true,
        main: () => <DashBoardPage />
    },
    {
        path: '/order',
        exact: true,
        main: () => <OrderPage />
    },
    {
        path: '/product/list-product',
        exact: true,
        main: () => <ProductManage content={<ListProduct />} />
    },
    {
        path: '/product/add-product',
        exact: true,
        main: () => <AddProducts />
    },
    {
        path: '/product/banned-product',
        exact: true,
        main: () => <ProductManage content={<BannedProducts />} />
    },


]

export default routes;