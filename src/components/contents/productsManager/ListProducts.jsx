import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ListProduct(props) {
  const history = useHistory();

  const redic = () => {
    history.push("/product/add-product");
  };

  const data = props.products;
  const [products, setProducts] = useState(data);

  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  function sortBySoldQuantity(a) {
    const b=[...a];
    setProducts(b.sort(compareValues("soldQuantity")));
  }

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
                              Tên sản phẩm
                            </div>
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
                <div>{products && products.length} product</div>
              </div>
              <div className="list-percent-bar">
                <div className="list-percent-box">
                  <div className="percent-bar">
                    <div className="percent-bar__bg"></div>
                    <div className="percent-bar__text">
                      <div>{products && products.length} / 1.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-right right">
            <button
              type="button"
              className="add-action shopee-button shopee-button--primary shopee-button--large"
              onClick={redic}
            >
              <i className="shopee-icon">
                <svg viewBox="0 0 32 32">
                  <path d="M17.5 2.5h-3v12h-12v3h12v12h3v-12h12v-3h-12v-12z"></path>
                </svg>
              </i>
              <span>Thêm 1 sản phẩm mới</span>
            </button>
            <div className="batch-action shopee-dropdown">
              <button
                type="button"
                className="batch-action-btn shopee-button shopee-button--large"
              >
                <span>Công cụ Xử lý sắp xếp</span>
                <i className="shopee-icon" style={{ marginLeft: "5px" }}>
                  <svg viewBox="0 0 32 32">
                    <path d="M28.2 11.1l-10.9 12s0 .1-.1.2c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3 0 0 0-.1-.1-.2l-10.9-12c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l10.4 11.3L26.9 9.8c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3z"></path>
                  </svg>
                </i>
              </button>
              <div className="shopee-popper">
                <ul className="shopee-dropdown-menu">
                  <li
                    className="mass-update-item shopee-dropdown-item"
                    onClick={() =>sortBySoldQuantity(products)
                    }
                  >
                    Sắp xếp theo tên
                  </li>
                  <li className="mass-update-item shopee-dropdown-item">
                    Sắp xếp theo giá
                  </li>
                  <li className="mass-update-item shopee-dropdown-item">
                    Theo số lượng đã bán
                  </li>
                </ul>
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
                      Giá(VND)
                    </div>
                    <div className="product-list-item__td product-variation__name product-list-header-item text-overflow2 product-discount">
                      Giảm giá(%)
                    </div>
                    <div className="shopee-order product-list-item__td product-variation__stock product-list-header-item text-overflow2 product-quantity">
                      Còn lại
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
            {!products ? (
              <div className="product-no-result">
                <span className="sprites-product-list-no-product"></span>
                <div className="text">Không tìm thấy sản phẩm</div>
              </div>
            ) : (
              <div>
                {products &&
                  products.map((item) => (
                    <div className="product-result" key={item.productDto.id}>
                      <div className="product-name">
                        {item.productDto.productName}
                      </div>
                      <div className="product-info">
                        <div className="product-price">
                          {item.productDto.productPrice}
                        </div>
                        <div className="product-discount">
                          {item.productDto.discount}
                        </div>
                        <div className="product-quantity">
                          {item.productDto.quantity}
                        </div>
                        <div className="product-sold">{item.soldQuantity}</div>
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
