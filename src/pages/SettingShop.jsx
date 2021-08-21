import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopInforAction } from "../actions/shopAction";
import ShopInfo from "../components/contents/shopInfo/ShopInfo";

function SettingShop(props) {
  const shopInformation = useSelector((state) => state.shopInformation);
  const { loading, error, shopInf } = shopInformation;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopInforAction());
  }, [dispatch]);
  return (
    <div>{loading ? "" : error ? "" : <ShopInfo shopInf={shopInf} />}</div>
  );
}

export default SettingShop;
