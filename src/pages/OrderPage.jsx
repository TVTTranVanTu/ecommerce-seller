import React, { useEffect } from "react";
import OrderManager from "../components/contents/orderManager/OrderManager";
import { useDispatch, useSelector } from "react-redux";
import { shopInforAction } from "../actions/shopAction";
import LoadingBox from "../components/boxInfor/LoadingBox";

function OrderPage(props) {
  const dispatch = useDispatch();
  const shopInformation = useSelector((state) => state.shopInformation);
  const {
    loading: shopInfLoading,
    error: shopInfError,
    shopInf,
  } = shopInformation;

  useEffect(() => {
    dispatch(shopInforAction());
  }, [dispatch]);
  return (
    <>
      {shopInfLoading ? (
        <div>
          <LoadingBox />
          <OrderManager shopInf={{}} />
        </div>
      ) : shopInfError ? (
        ""
      ) : shopInf ? (
        <OrderManager shopInf={shopInf} />
      ) : (
        ""
      )}
    </>
  );
}

export default OrderPage;
