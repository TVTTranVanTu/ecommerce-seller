import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductsAction } from "../../../actions/productAction";

function ListProduct(props) {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.listProducts);
  const { loading, error, products } = listProducts;

  console.log(products === null);
  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);

  return (
    <div className="list-all">
      <div className="product-filter-card product-list-section">
        <form
          autoComplete="off"
          className="shopee-form filter-form shopee-form--label-right"
        >
          <div className="filter-form-box">
            <div className="filter-col-left">
              <div className="product shopee-form-item">
                <label className="shopee-form-item__label empty"></label>
                <div className="shopee-form-item__control">
                  <div className="shopee-form-item__content">
                    <div className="shopee-input-group">
                      <span className="shopee-input-group__prepend">
                        <div className="shopee-select">
                          <div className="shopee-selector shopee-selector--normal">
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
                                  <path d="M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z"></path>
                                </svg>
                              </i>
                            </div>
                          </div>
                          <div
                            className="shopee-popper"
                            style={{ display: "none" }}
                          >
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
                                      <div className="shopee-option">
                                        SKU sản phẩm
                                      </div>
                                      <div className="shopee-option">
                                        SKU phân loại
                                      </div>
                                      <div className="shopee-option">
                                        Phân loại hàng
                                      </div>
                                      <div className="shopee-option">
                                        Mã sản phẩm
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
                  </div>
                </div>
              </div>
              <div className="stock shopee-form-item">
                <label className="shopee-form-item__label empty"> </label>
                <div className="shopee-form-item__control">
                  <div className="shopee-form-item__content">
                    <span style={{ marginRight: "16px" }}>Kho hàng</span>
                    <div className="shopee-form-item__content">
                      <div className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix">
                        <div className="shopee-input__inner shopee-input__inner--normal">
                          <input
                            type="text"
                            placeholder="Nhập vào"
                            resize="vertical"
                            rows="2"
                            minrows="2"
                            restrictiontype="value"
                            max="Infinity"
                            min="-Infinity"
                            className="shopee-input__input"
                          />
                          <div className="shopee-input__suffix">
                            <div className="shopee-number-input__controls">
                              <div className="shopee-number-input__control up">
                                <i className="shopee-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 
                                        C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 
                                        10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                    ></path>
                                  </svg>
                                </i>
                              </div>
                              <div className="shopee-number-input__control down">
                                <i className="shopee-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 
                                        C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 
                                        10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                    ></path>
                                  </svg>
                                </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="interim-line"></span>
                      <div className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix">
                        <div className="shopee-input__inner shopee-input__inner--normal">
                          <input
                            type="text"
                            placeholder="Nhập vào"
                            resize="vertical"
                            rows="2"
                            minrows="2"
                            restrictiontype="value"
                            max="Infinity"
                            min="-Infinity"
                            className="shopee-input__input"
                          />
                          <div className="shopee-input__suffix">
                            <div className="shopee-number-input__controls">
                              <div className="shopee-number-input__control up">
                                <i className="shopee-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 
                                        C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 
                                        10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                    ></path>
                                  </svg>
                                </i>
                              </div>
                              <div className="shopee-number-input__control down">
                                <i className="shopee-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 
                                        5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 
                                        11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 
                                        C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                    ></path>
                                  </svg>
                                </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-col-right">
              <div className="shopee-form-item">
                <label className="shopee-form-item__label"> Danh mục</label>
                <div className="shopee-form-item__control">
                  <div className="shopee-form-item__content">
                    <div className="category-input-wrapper">
                      <div className="category-input" edit-text="Sửa">
                        <div className="category-name hover-pointer has-btn">
                          <span className="cat-selected-wrapper">
                            <span className="placeholder">Chọn ngành hàng</span>
                          </span>
                        </div>
                        <button
                          type="button"
                          className="edit-btn shopee-button shopee-button--link shopee-button--normal"
                        >
                          <i className="shopee-icon">
                            <svg
                              dataname="图层 1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 
                                470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 
                                92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 
                                242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z"
                                dataname="Layer 1"
                              ></path>
                            </svg>
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="range-input shopee-form-item">
                <label className="shopee-form-item__label"> Đã bán</label>
                <div className="shopee-form-item__control">
                  <div className="shopee-form-item__content">
                    <div className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix">
                      <div className="shopee-input__inner shopee-input__inner--normal">
                        <input
                          type="text"
                          placeholder="Nhập vào"
                          resize="vertical"
                          rows="2"
                          minrows="2"
                          restrictiontype="value"
                          max="Infinity"
                          min="-Infinity"
                          className="shopee-input__input"
                        />
                        <div className="shopee-input__suffix">
                          <div className="shopee-number-input__controls">
                            <div className="shopee-number-input__control up">
                              <i className="shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 
                                    L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                  ></path>
                                </svg>
                              </i>
                            </div>
                            <div className="shopee-number-input__control down">
                              <i className="shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 
                                    11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                  ></path>
                                </svg>
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="connector"></span>
                    <div className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix">
                      <div className="shopee-input__inner shopee-input__inner--normal">
                        <input
                          type="text"
                          placeholder="Nhập vào"
                          resize="vertical"
                          rows="2"
                          minrows="2"
                          restrictiontype="value"
                          max="Infinity"
                          min="-Infinity"
                          className="shopee-input__input"
                        />
                        <div className="shopee-input__suffix">
                          <div className="shopee-number-input__controls">
                            <div className="shopee-number-input__control up">
                              <i className="shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 
                                    5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 
                                    L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                  ></path>
                                </svg>
                              </i>
                            </div>
                            <div className="shopee-number-input__control down">
                              <i className="shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 
                                    5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 
                                    L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                  ></path>
                                </svg>
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              type="button"
              className="shopee-button shopee-button--primary shopee-button--normal"
            >
              <span>Tìm</span>
            </button>
            <button
              type="button"
              className="shopee-button shopee-button--normal"
              style={{ marginLeft: "16px" }}
            >
              <span>Nhập Lại</span>
            </button>
          </div>
        </form>
      </div>
      <div className="prodcut-list-header product-list-section">
        <div className="grid">
          <div className="grid-left">
            <div className="title-box">
              <div className="page-title">
                {loading ? "0 product" : <div>{products.length} product</div>}
              </div>
              <div className="list-percent-bar">
                <div className="list-percent-box">
                  <div className="percent-bar">
                    <div className="percent-bar__bg"></div>
                    <div className="percent-bar__text">
                      {loading ? (
                        "0 / 1.000"
                      ) : (
                        <div>{products.length} / 1.000</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-right right">
            <div className="bi-action">
              <div className="bi-badge shopee-badge-x">
                <button
                  type="button"
                  className="shopee-button shopee-button--link shopee-button--large"
                >
                  <span>Tối ưu sản phẩm</span>
                </button>
                <sup className="shopee-badge-x__sup shopee-badge-x__sup--new shopee-badge-x__sup--fixed">
                  <span>New</span>
                </sup>
              </div>
            </div>
            <Link to="/product/add-product">
              <button
                type="button"
                className="add-action shopee-button shopee-button--primary shopee-button--large"
              >
                <i className="shopee-icon">
                  <svg viewBox="0 0 32 32">
                    <path d="M17.5 2.5h-3v12h-12v3h12v12h3v-12h12v-3h-12v-12z"></path>
                  </svg>
                </i>
                <span>Thêm 1 sản phẩm mới</span>
              </button>
            </Link>
            <div className="batch-action shopee-dropdown">
              <button
                type="button"
                className="batch-action-btn shopee-button shopee-button--large"
              >
                <span>Công cụ Xử lý hàng loạt</span>
                <i className="shopee-icon" style={{ marginLeft: "5px" }}>
                  <svg viewBox="0 0 32 32">
                    <path d="M28.2 11.1l-10.9 12s0 .1-.1.2c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3 0 0 0-.1-.1-.2l-10.9-12c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l10.4 11.3L26.9 9.8c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3z"></path>
                  </svg>
                </i>
              </button>
              <div className="shopee-popper" style={{ display: "none" }}>
                <ul className="shopee-dropdown-menu">
                  <li className="mass-update-item shopee-dropdown-item">
                    Đăng Hàng Loạt
                  </li>
                  <li className="mass-update-item shopee-dropdown-item">
                    Cập Nhật Hàng Loạt
                  </li>
                  <li className="mass-update-item shopee-dropdown-item">
                    Cập Nhật Thuộc Tính
                  </li>
                </ul>
              </div>
            </div>
            <div className="view-modes">
              <div className="view-model-item view-radio active">
                <i className="list-view">
                  <svg
                    data-name="图层 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <g data-name="Layer 1">
                      <path d="M864 256H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zm0 288H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zm0 288H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64z"></path>
                      <circle cx="176" cy="224" r="48"></circle>
                      <circle cx="176" cy="800" r="48"></circle>
                      <circle cx="176" cy="512" r="48"></circle>
                    </g>
                  </svg>
                </i>
              </div>
              <div className="view-model-item view-radio">
                <i className="grid-view">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      d="M27 15h-8c-1.1 0-2-1.2-2-2.3V5c0-1.1.9-2 2-2h8.1c1 0 1.9.9 1.9 1.9V13c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1h-6c-.6 
                      0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1V6zm-14 9H5c-1.1 0-2-1.2-2-2.3V5c0-1.1.9-2 2-2h8.1c1 0 1.9.9 1.9 1.9V13c0 
                      1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1V6zm14 23h-8c-1.1 0-2-1.2-2-2.3V19c0-1.1.9-2 2-2h8.1c1.1 
                      0 1.9.9 1.9 1.9V27c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1v-6zm-14 9H5c-1.1 0-2-1.2-2-2.3V19c0-1.1.9-2 
                      2-2h8.1c1.1 0 1.9.9 1.9 1.9V27c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1v-6z"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-list-section product-and-pagination-wrap list">
        <div className="product-list-container">
          <div className="product-list-view no-result">
            <div className="shopee-fixed-top-card">
              <div className="fixed-container">
                <div className="product-list-item product-list-header ">
                  <div className="product-list-item__td product-main product-list-header-item product-name">
                    Tên sản phẩm
                  </div>
                  <div className="shopee-order-group product-variation product-variation-header">
                    <div className="product-list-item__td product-variation__sku product-list-header-item text-overflow2 product-price">
                      Giá
                    </div>
                    <div className="product-list-item__td product-variation__name product-list-header-item text-overflow2 product-discount">
                      Giảm giá
                    </div>
                    <div className="shopee-order product-list-item__td product-variation__stock product-list-header-item text-overflow2 product-quantity">
                      Số lượng
                    </div>
                    <div className="shopee-order product-list-item__td product-variation__sales product-list-header-item text-overflow2 product-sold">
                      Đã bán
                    </div>
                  </div>
                  <div className="product-action product-list-header-item text-overflow2 edit-product">
                    Sửa thông tin
                  </div>
                </div>
              </div>
              <div className="fixed-placeholder"></div>
            </div>
            {loading ? (
              <div className="product-no-result">
                <span className="sprites-product-list-no-product"></span>
                <div className="text">Không tìm thấy sản phẩm</div>
              </div>
            ) : error ? (
              ""
            ) : products === null ? (
              <div className="product-no-result">
                <span className="sprites-product-list-no-product"></span>
                <div className="text">Không tìm thấy sản phẩm</div>
              </div>
            ) : (
              <div>
                {products.map((item) => (
                  <div className="product-result" key={item.id}>
                    <div className="product-name">{item.productName}</div>
                    <div className="product-info">
                      <div className="product-price">{item.productPrice}</div>
                      <div className="product-discount">{item.discount}</div>
                      <div className="product-quantity">{item.quantity}</div>
                      <div className="product-sold"></div>
                    </div>
                    <div className="edit-product">
                      <button
                        type="button"
                        className="edit-btn shopee-button shopee-button--link shopee-button--normal"
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
                              data-name="Layer 1"
                            ></path>
                          </svg>
                        </i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
