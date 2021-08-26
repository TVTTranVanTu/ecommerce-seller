import React from "react";
import OrderDetail from "./OrderDetail";

function OrderList(props) {
  const { orders } = props;
  const listOrders = orders;

  return (
    <div>
      {!listOrders || listOrders.length === 0 ? (
        <div className="product-no-result">
          <span className="sprites-product-list-no-product"></span>
          <div className="text">Không tìm thấy đơn hàng</div>
        </div>
      ) : (
        <div>
          {listOrders &&
            listOrders.map((item, index) => (
              <OrderDetail key={index} item={item} />
            ))}
        </div>
      )}
    </div>
  );
}

export default OrderList;
