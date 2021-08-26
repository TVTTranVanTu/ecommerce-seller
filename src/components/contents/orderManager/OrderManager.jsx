import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrder } from "../../../actions/orderAction";
import Order from "./Order";

function OrderManager(props) {
  const dispatch = useDispatch();

  const [traslate, setTranslate] = useState(0);
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState("");
  const { shopInf } = props;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const editStatusOrder = useSelector((state) => state.editStatusOrder);
  const { success } = editStatusOrder;
  const [params, setParams] = useState({
    limit: 10,
    page: 0,
  });

  useEffect(() => {
    shopInf && dispatch(listOrder(shopInf.id, status, params));
  }, [dispatch, status, params, shopInf, success]);

  return (
    <div className="portal-sale-container">
      <div className="shopee-fixed-top-card">
        <div className="fixed-container">
          <div className="portal-panel">
            <div className="list-tabs">
              <div className="tabs shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
                <div className="shopee-tabs__nav">
                  <div className="shopee-tabs__nav-warp">
                    <div
                      className="shopee-tabs__nav-tabs"
                      style={{ transform: "translateX(0px)" }}
                    >
                      <div
                        className={
                          active === 0
                            ? "shopee-tabs__nav-tab  active"
                            : "shopee-tabs__nav-tab "
                        }
                        onClick={() => {
                          setTranslate(0);
                          setActive(0);
                          setStatus("");
                        }}
                      >
                        <div className="tab-label">
                          <span>Tất cả</span>
                        </div>
                      </div>
                      <div
                        className={
                          active === 1
                            ? "shopee-tabs__nav-tab  active"
                            : "shopee-tabs__nav-tab "
                        }
                        onClick={() => {
                          setTranslate(93);
                          setActive(1);
                          setStatus("/AWAITING_FULFILLMENT");
                        }}
                      >
                        <div className="tab-label">
                          <span>Chờ xác nhận</span>
                        </div>
                      </div>

                      <div
                        className={
                          active === 2
                            ? "shopee-tabs__nav-tab  active"
                            : "shopee-tabs__nav-tab "
                        }
                        onClick={() => {
                          setTranslate(200);
                          setActive(2);
                          setStatus("/AWAITING_SHIPMENT");
                        }}
                      >
                        <div className="tab-label">
                          <span>Đang giao</span>
                        </div>
                      </div>
                      <div
                        className={
                          active === 3
                            ? "shopee-tabs__nav-tab  active"
                            : "shopee-tabs__nav-tab "
                        }
                        onClick={() => {
                          setTranslate(290);
                          setActive(3);
                          setStatus("/COMPLETED");
                        }}
                      >
                        <div className="tab-label">
                          <span>Đã giao</span>
                        </div>
                      </div>
                      <div
                        className={
                          active === 4
                            ? "shopee-tabs__nav-tab  active"
                            : "shopee-tabs__nav-tab "
                        }
                        onClick={() => {
                          setTranslate(370);
                          setActive(4);
                          setStatus("/CANCELED");
                        }}
                      >
                        <div className="tab-label">
                          <span>Đơn huỷ</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="shopee-tabs__ink-bar"
                      style={{
                        width: "71px",
                        transform: `translateX(${traslate}px)`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-placeholder"></div>
      </div>
      <div className="page fulfillment-order">
        {loading ? (
          <div>
            <Order orders={[]} opaciti={0.5}></Order>
          </div>
        ) : error ? (
          ""
        ) : (
          orders && <Order orders={orders.items}></Order>
        )}
      </div>
    </div>
  );
}

export default OrderManager;
