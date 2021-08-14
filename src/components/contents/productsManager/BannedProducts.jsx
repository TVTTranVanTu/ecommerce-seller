import React from "react";

function BannedProducts(props) {
  return (
    <div className="list-banned">
      <div className="prodcut-list-header product-list-section">
        <div className="grid">
          <div className="title-box">
            <div className="page-title">0 product</div>
          </div>
        </div>
        <div className="page-tabs">
          <div className="shopee-tabs shopee-tabs-card shopee-tabs-normal shopee-tabs-top">
            <div className="shopee-tabs__nav">
              <div className="shopee-tabs__nav-warp">
                <div className="shopee-tabs__nav-tabs">
                  <div className="shopee-tabs__nav-tab active">
                    <div className="tab">Đã tạm khóa 0</div>
                  </div>
                  <div className="shopee-tabs__nav-tab">
                    <div className="tab">Hạn chế hiển thị 0</div>
                  </div>
                  <div className="shopee-tabs__nav-tab">
                    <div className="tab">Đã xóa bởi Shopee 0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopee-tabs__content">
              <div className="shopee-tabs-tabpane"></div>
              <div className="shopee-tabs-tabpane"></div>
              <div className="shopee-tabs-tabpane"></div>
            </div>
          </div>
          <div className="suspended-history">
            Lịch sử đã xóa
            <i className="suspended-history-icon shopee-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 
                    C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 
                    11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 
                    5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"
                ></path>
              </svg>
            </i>
          </div>
        </div>
        <div className="grid filter">
          <div className="banned-search-container">
            <div className="shopee-input-group">
              <span className="shopee-input-group__prepend">
                <div className="shopee-select">
                  <div
                    tabIndex="0"
                    className="shopee-selector shopee-selector--normal"
                  >
                    <div className="shopee-selector__inner line-clamp--1">
                      {" "}
                      Tên sản phẩm
                    </div>
                    <div className="shopee-selector__suffix">
                      <i className="shopee-selector__suffix-icon shopee-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 
                            C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 
                            8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 
                            13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div className="shopee-popper" style={{ display: "none" }}>
                    <div className="shopee-select__menu">
                      <div className="shopee-scrollbar">
                        <div className="shopee-scrollbar__wrapper">
                          <div className="shopee-scrollbar__bar vertical">
                            <div className="shopee-scrollbar__thumb"></div>
                          </div>
                          <div className="shopee-scrollbar__content">
                            <div className="shopee-select__options">
                              <div className="shopee-option selected">
                                Tên sản phẩm
                              </div>
                              <div className="shopee-option">SKU sản phẩm</div>
                              <div className="shopee-option">SKU phân loại</div>
                              <div className="shopee-option">
                                Phân loại hàng
                              </div>
                              <div className="shopee-option">Mã sản phẩm</div>
                            </div>
                            <div className="resize-triggers">
                              <div className="expand-trigger">
                                <div></div>
                              </div>
                              <div className="contract-trigger"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="shopee-select__filter-empty"></p>
                  </div>
                </div>
              </span>
              <span className="shopee-input-group__append">
                <div className="shopee-input">
                  <div className="shopee-input__inner shopee-input__inner--normal">
                    <input
                      type="text"
                      placeholder="Nhập vào"
                      resize="vertical"
                      rows="2"
                      minrows="2"
                      restrictiontype="input"
                      max="Infinity"
                      min="-Infinity"
                      className="shopee-input__input"
                    />
                  </div>
                </div>
              </span>
            </div>
            <div className="banned-search-violation">
              <span className="banned-search-violation-label">
                Loại vi phạm
              </span>
              <div className="banned-search-violation-select">
                <div className="shopee-select" min-width="325">
                  <div
                    tabIndex="0"
                    className="shopee-selector shopee-selector--normal"
                  >
                    <div className="shopee-selector__inner placeholder line-clamp--1">
                      {" "}
                      Chọn
                    </div>
                    <div className="shopee-selector__suffix">
                      <i className="shopee-selector__suffix-icon shopee-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 
                            C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 
                            8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 
                            13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div className="shopee-popper" style={{ display: "none" }}>
                    <div className="shopee-select__menu">
                      <div className="shopee-scrollbar">
                        <div className="shopee-scrollbar__wrapper">
                          <div className="shopee-scrollbar__bar vertical">
                            <div className="shopee-scrollbar__thumb"></div>
                          </div>
                          <div className="shopee-scrollbar__content">
                            <div className="shopee-select__options">
                              <div className="shopee-option">Sản phẩm cấm</div>
                              <div className="shopee-option">
                                Hàng giả, hàng nhái
                              </div>
                              <div className="shopee-option">Spam</div>
                              <div className="shopee-option">
                                Hình ảnh không phù hợp
                              </div>
                              <div className="shopee-option">
                                Sản phẩm cần bổ sung thông tin
                              </div>
                              <div className="shopee-option">
                                Yêu cầu đối với thông tin sản phẩm
                              </div>
                            </div>
                            <div className="resize-triggers">
                              <div className="expand-trigger">
                                <div></div>
                              </div>
                              <div className="contract-trigger"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="shopee-select__filter-empty"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btns">
            <button
              type="button"
              className="shopee-button shopee-button--primary shopee-button--normal"
            >
              <span>Tìm</span>
            </button>
            <button
              type="button"
              className="reset-btn shopee-button shopee-button--normal"
            >
              <span>Nhập Lại</span>
            </button>
          </div>
        </div>
      </div>
      <div className="product-list-section product-and-pagination-wrap list">
        <div className="list-banned-container">
          <div className="list-banned-view no-result">
            <div className="shopee-fixed-top-card">
              <div className="fixed-container">
                <div className="product-list-item product-list-header ">
                  <div className="product-list-item__td product-main product-list-header-item">
                    <div className="product-list-header-item">Tên sản phẩm</div>
                  </div>
                  <div className="product-list-item__td update-time product-list-header-item text-overflow">
                    Thời gian cập nhật
                  </div>
                  <div className="product-list-item__td deadline product-list-header-item text-overflow">
                    Hạn sửa lỗi
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="product-list-item__td violation-type product-list-header-item text-overflow">
                      Loại vi phạm
                    </div>
                    <div className="product-list-item__td violation-reason product-list-header-item text-overflow">
                      Lý do vi phạm
                    </div>
                    <div className="product-list-item__td suggestion product-list-header-item text-overflow">
                      Gợi ý
                    </div>
                  </div>
                  <div className="product-action product-list-header-item text-overflow">
                    Thao tác
                  </div>
                </div>
              </div>
              <div className="fixed-placeholder"></div>
            </div>
            <div className="product-no-result">
              <span className="sprites-product-list-no-product"></span>
              <div className="text">Không tìm thấy sản phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannedProducts;
