import React from "react";

function ShopReview(props) {
  return (
    <div>
      <div className="fulfillment-settings">
        <div>
          <div className="rating">
            <div className="header">
              <div className="caption">
                <div className="title">Đánh Giá Shop</div>
                <div className="subtitle">Xem đánh giá Shop của bạn</div>
              </div>
              <div className="buttons">
                <div className="performance">
                  <span className="score">0.0</span>
                  <span className="total">&nbsp;/&nbsp;5</span>
                </div>
              </div>
            </div>
            <div className="rating-filter-wrapper">
              <form
                autocomplete="off"
                className="shopee-form shopee-form--label-right"
              >
                <div className="rating-filter">
                  <div className="shopee-form-item">
                    <label className="shopee-form-item__label">
                      Tên sản phẩm:
                    </label>
                    <div className="shopee-form-item__control">
                      <div className="shopee-form-item__content">
                        <div className="shopee-input">
                          <div className="shopee-input__inner shopee-input__inner--normal">
                            <input
                              type="text"
                              placeholder="Nhập tên sản phẩm"
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
                      </div>
                    </div>
                  </div>
                  <div className="model-name shopee-form-item">
                    <label className="shopee-form-item__label">
                      Phân loại hàng:
                    </label>
                    <div className="shopee-form-item__control">
                      <div className="shopee-form-item__content">
                        <div className="shopee-input">
                          <div className="shopee-input__inner shopee-input__inner--normal">
                            <input
                              type="text"
                              placeholder="Nhập tên Phân loại hàng"
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
                      </div>
                    </div>
                  </div>
                  <div className="shopee-form-item">
                    <label className="shopee-form-item__label">
                      {" "}
                      Người mua:
                    </label>
                    <div className="shopee-form-item__control">
                      <div className="shopee-form-item__content">
                        <div className="shopee-input">
                          <div className="shopee-input__inner shopee-input__inner--normal">
                            <input
                              type="text"
                              placeholder="Nhập tên đăng nhập"
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rating-action">
                  <div className="rating-action-form shopee-form-item">
                    <label className="shopee-form-item__label empty"> </label>
                    <div className="shopee-form-item__control">
                      <div className="shopee-form-item__content">
                        <button
                          type="button"
                          className="shopee-button shopee-button--primary shopee-button--normal"
                        >
                          <span>Tìm</span>
                        </button>
                        <button
                          type="button"
                          className="mr12 shopee-button shopee-button--normal"
                        >
                          <span>Nhập Lại</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="content">
              <div className="tab-wrapper">
                <div className="shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
                  <div className="shopee-tabs__nav">
                    <div className="shopee-tabs__nav-warp">
                      <div
                        className="shopee-tabs__nav-tabs"
                        style={{ transform: "translateX(0px)" }}
                      >
                        <div className="shopee-tabs__nav-tab active">
                          Tất cả
                        </div>
                        <div className="shopee-tabs__nav-tab">Chưa trả lời</div>
                        <div className="shopee-tabs__nav-tab">Đã trả lời </div>
                      </div>
                      <div
                        className="shopee-tabs__ink-bar"
                        style={{ width: "71px", transform: "translateX(0px)" }}
                      ></div>
                    </div>
                  </div>
                  <div className="shopee-tabs__content">
                    <div className="shopee-tabs-tabpane"></div>
                  </div>
                </div>
              </div>
              <div className="shopee-tabs shopee-tabs-module shopee-tabs-normal shopee-tabs-top">
                <div className="shopee-tabs__nav">
                  <div className="shopee-tabs__nav-warp">
                    <div className="shopee-tabs__nav-tabs">
                      <div className="shopee-tabs__nav-tab active">Tất cả </div>
                      <div className="shopee-tabs__nav-tab">
                        <span className="title">5 Sao</span>
                      </div>
                      <div className="shopee-tabs__nav-tab">
                        <span className="title">4 Sao</span>
                      </div>
                      <div className="shopee-tabs__nav-tab">
                        <span className="title">3 Sao</span>
                      </div>
                      <div className="shopee-tabs__nav-tab">
                        <span className="title">2 Sao</span>
                      </div>
                      <div className="shopee-tabs__nav-tab">
                        <span className="title">1 Sao</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-header table">
                <div className="column information">Thông tin Sản phẩm</div>
                <div className="column evaluation-content">
                  Đánh giá của Người mua
                </div>
                <div className="column reply">Trả lời đánh giá của bạn</div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="no-result">
                  <div className="shopee-default-page">
                    <i className="shopee-default-page__icon shopee-icon normal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 93 87"
                      >
                        <defs>
                          <rect
                            id="defaultpage_nodata-a"
                            width="45"
                            height="33"
                            x="44"
                            y="32"
                            rx="2"
                          ></rect>
                          <mask
                            id="defaultpage_nodata-b"
                            width="45"
                            height="33"
                            x="0"
                            y="0"
                            fill="#fff"
                            maskContentUnits="userSpaceOnUse"
                            maskUnits="objectBoundingBox"
                          >
                            <use xlinkHref="#defaultpage_nodata-a"></use>
                          </mask>
                        </defs>
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          transform="translate(-3 -4)"
                        >
                          <rect width="96" height="96"></rect>
                          <ellipse
                            cx="48"
                            cy="85"
                            fill="#F2F2F2"
                            rx="45"
                            ry="6"
                          ></ellipse>
                          <path
                            fill="#FFF"
                            stroke="#D8D8D8"
                            d="M79.5,17.4859192 L66.6370555,5.5 L17,5.5 C16.1715729,5.5 15.5,6.17157288 15.5,7 
                            L15.5,83 C15.5,83.8284271 16.1715729,84.5 17,84.5 L78,84.5 C78.8284271,84.5 79.5,83.8284271 79.5,83 L79.5,17.4859192 Z"
                          ></path>
                          <path
                            fill="#DBDBDB"
                            fillRule="nonzero"
                            d="M66,6 L67.1293476,6 L67.1293476,16.4294956 C67.1293476,17.1939227 67.7192448,17.8136134 68.4469198,17.8136134 
                            L79,17.8136134 L79,19 L68.4469198,19 C67.0955233,19 66,17.849146 66,16.4294956 L66,6 Z"
                          ></path>
                          <g fill="#D8D8D8" transform="translate(83 4)">
                            <circle
                              cx="7.8"
                              cy="10.28"
                              r="3"
                              opacity=".5"
                            ></circle>
                            <circle cx="2" cy="3" r="2" opacity=".3"></circle>
                            <path
                              fillRule="nonzero"
                              d="M10.5,1 C9.67157288,1 9,1.67157288 9,2.5 C9,3.32842712 9.67157288,4 10.5,4 C11.3284271,4 12,3.32842712 
                              12,2.5 C12,1.67157288 11.3284271,1 10.5,1 Z M10.5,7.10542736e-15 C11.8807119,7.10542736e-15 13,1.11928813 
                              13,2.5 C13,3.88071187 11.8807119,5 10.5,5 C9.11928813,5 8,3.88071187 8,2.5 C8,1.11928813 9.11928813,7.10542736e-15 
                              10.5,7.10542736e-15 Z"
                              opacity=".3"
                            ></path>
                          </g>
                          <path
                            fill="#FAFAFA"
                            d="M67.1963269,6.66851903 L67.1963269,16.32 C67.2587277,17.3157422 67.675592,17.8136134 
                            68.4469198,17.8136134 C69.2182476,17.8136134 72.735941,17.8136134 79,17.8136134 L67.1963269,6.66851903 Z"
                          ></path>
                          <use
                            fill="#FFF"
                            stroke="#D8D8D8"
                            strokeDasharray="3"
                            strokeWidth="2"
                            mask="url(#defaultpage_nodata-b)"
                            xlinkHref="#defaultpage_nodata-a"
                          ></use>
                          <rect
                            width="1"
                            height="12"
                            x="54"
                            y="46"
                            fill="#D8D8D8"
                            rx=".5"
                          ></rect>
                          <rect
                            width="1"
                            height="17"
                            x="62"
                            y="40"
                            fill="#D8D8D8"
                            rx=".5"
                          ></rect>
                          <rect
                            width="1"
                            height="10"
                            x="70"
                            y="48"
                            fill="#D8D8D8"
                            rx=".5"
                          ></rect>
                          <rect
                            width="1"
                            height="14"
                            x="78"
                            y="43"
                            fill="#D8D8D8"
                            rx=".5"
                          ></rect>
                        </g>
                      </svg>
                    </i>
                    <div className="shopee-default-page__content">
                      Chưa có đánh giá nào dành cho Shop của bạn
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopReview;
