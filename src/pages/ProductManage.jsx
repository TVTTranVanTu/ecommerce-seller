import React from "react";

function ProductManage(props) {
  return (
    <div className="product-manager">
      <div className="product-list">
        <div className="product-list-main">
          <div className="fixed-top-card">
            <div className="fixed-container">
              <div className="portal-panel">
                <div className="tabs shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
                  <div className="shopee-tabs__nav">
                    <div className="shopee-tabs__nav-warp">
                      <div
                        className="shopee-tabs__nav-tabs"
                        style={{ transform: "translateX(0px)" }}
                      >
                        <div className="shopee-tabs__nav-tab active">
                          <div className="tabs__tab">Tất cả</div>
                        </div>
                        <div className="shopee-tabs__nav-tab">
                          <div className="tabs__tab">Đang hoạt động</div>
                        </div>
                        <div className="shopee-tabs__nav-tab">
                          <div className="tabs__tab">Hết hàng</div>
                        </div>
                        <div className="shopee-tabs__nav-tab">
                          <div className="tabs__tab">Vi phạm</div>
                        </div>
                        <div className="shopee-tabs__nav-tab">
                          <div className="tabs__tab">Đã ẩn</div>
                        </div>
                      </div>
                      <div
                        className="shopee-tabs__ink-bar"
                        style={{ width: "71px", transform: "translateX(0px)" }}
                      ></div>
                    </div>
                  </div>
                  <div className="shopee-tabs__content">
                    <div className="shopee-tabs-tabpane"></div>
                    <div className="shopee-tabs-tabpane"></div>
                    <div className="shopee-tabs-tabpane"></div>
                    <div className="shopee-tabs-tabpane"></div>
                    <div className="shopee-tabs-tabpane"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-list-main">
              <div className="list-panel">
                {props.content}
                {props.products}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManage;
