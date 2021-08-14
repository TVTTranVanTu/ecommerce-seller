import React from "react";
import OrderList from "./components/contents/orderManager/OrderList";
import AddProducts from "./components/contents/productsManager/AddProducts";
import BannedProducts from "./components/contents/productsManager/BannedProducts";
import ListProduct from "./components/contents/productsManager/ListProducts";
import Products from "./components/contents/productsManager/Products";
import ShopReview from "./components/contents/shopManager/ShopReview";
import DashBoardPage from "./pages/DashBoardPage";
import OrderPage from "./pages/OrderPage";
import ProductManage from "./pages/ProductManage";
import SettingShop from "./pages/SettingShop";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <DashBoardPage />,
  },
  {
    path: "/dashboard",
    exact: true,
    main: () => <DashBoardPage />,
  },
  {
    path: "/portal/settings/basic",
    exact: true,
    main: () => <SettingShop />,
  },
  {
    path: "/portal/sale/order",
    exact: true,
    main: () => <OrderList />,
  },
  {
    path: "/portal/sale/order?type=cancelled",
    exact: true,
    main: () => <OrderPage />,
  },
  {
    path: "/portal/sale/returnlist",
    exact: true,
    main: () => <OrderPage />,
  },
  {
    path: "/product/list-product",
    exact: true,
    main: () => <ProductManage content={<Products />} />,
  },
  {
    path: "/product/add-product",
    exact: true,
    main: () => <AddProducts />,
  },
  {
    path: "/product/banned-product",
    exact: true,
    main: () => <ProductManage content={<BannedProducts />} />,
  },
  {
    path: "/portal/settings/shop/rating",
    exact: true,
    main: () => <ShopReview />,
  },
];

export default routes;
