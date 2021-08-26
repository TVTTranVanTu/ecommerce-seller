import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStatusAction } from "../../../actions/orderAction";

function OrderDetail(props) {
  const { item } = props;
  const id = item.itemId;
  const dispatch = useDispatch();
  const [hideBox, setHideBox] = useState(true);
  const [status, setStatus] = useState("");
  const [active, setActive] = useState(0);
  const editStatusOrder = useSelector((state) => state.editStatusOrder);
  const { loading, error, success } = editStatusOrder;

  const changeStatusHandle = () => {
    setHideBox(false);
  };
  const dispatchStatus = () => {
    dispatch(editStatusAction(id, status));
  };
  const changeStatusCanceled = () => {
    dispatch(editStatusAction(id, "CANCELED"));
  };

  useEffect(() => {
    success && setHideBox(true);
  }, [dispatch, success]);
  return (
    <div className="product-result" key={item.itemId}>
      <div className="product-name">{item.productName}</div>
      <div className="product-quantity">{item.productQuantity}</div>
      <div className="product-status">
        {item.itemStatus === "AWAITING_FULFILLMENT"
          ? "Đang chờ duyệt"
          : item.itemStatus === "AWAITING_SHIPMENT"
          ? "Đang giao hàng"
          : item.itemStatus === "COMPLETED"
          ? "Đã nhận hàng"
          : "Đã hủy"}
      </div>
      <div className="created-at">{item.createdAt}</div>
      <div className="edit-product">
        <button
          type="button"
          className="edit-btn shopee-button shopee-button--link shopee-button--normal mr-10"
          onClick={changeStatusHandle}
        >
          <i className="shopee-icon">
            <svg
              data-name="图层 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 
                0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 
                242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z"
                dataname="Layer 1"
              ></path>
            </svg>
          </i>
        </button>
        <button
          type="button"
          className="edit-btn shopee-button shopee-button--link shopee-button--normal ml-10"
          onClick={changeStatusCanceled}
        >
          <i className="shopee-icon">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 21 21"
              fill="#ee4d2d"
              focusable="false"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
              <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
            </svg>
          </i>
        </button>
      </div>
      <div
        className={hideBox === true ? "select-status hideBox" : "select-status"}
      >
        <div className="select-title">Chuyển trạng thái</div>
        <div className="status-list">
          <div
            className={active === 1 ? "status-item active" : "status-item"}
            onClick={() => {
              setStatus("AWAITING_FULFILLMENT");
              setActive(1);
            }}
          >
            <div className="status-name">Đang chờ duyệt</div>
          </div>
          <div
            className={active === 2 ? "status-item active" : "status-item"}
            onClick={() => {
              setStatus("AWAITING_SHIPMENT");
              setActive(2);
            }}
          >
            <div className="status-name">Đang vận chuyển</div>
          </div>
          <div
            className={active === 3 ? "status-item active" : "status-item"}
            onClick={() => {
              setStatus("COMPLETED");
              setActive(3);
            }}
          >
            <div className="status-name">Đã giao & thanh toán</div>
          </div>
          <div
            className={active === 4 ? "status-item active" : "status-item"}
            onClick={() => {
              setStatus("CANCELED");
              setActive(4);
            }}
          >
            <div className="status-name">Đã hủy</div>
          </div>
          <button
            className="shopee-button  shopee-button--normal button-canceled"
            onClick={() => setHideBox(true)}
          >
            Hủy
          </button>
          <button
            className="shopee-button  shopee-button--normal button-confirm"
            onClick={dispatchStatus}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
