import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Product from "./Product";

function ListProduct(props) {
  const history = useHistory();

  const redic = () => {
    history.push("/product/add-product");
  };

  const data = props.products;
  const [products, setProducts] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = () => {
    const filterProducts = products.filter((product) => {
      return product.productDto.productName
        .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
        .replace(/\u02C6|\u0306|\u031B/g, "")
        .toLowerCase()
        .includes(
          searchTerm
            .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
            .toLowerCase()
        );
    });
    setProducts(filterProducts);
  };

  const resetProducts = () => {
    setProducts(data);
  };
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
    const b = [...a];
    setProducts(b.sort(compareValues("soldQuantity")));
    console.log(products);
  }
  function sortByName(a) {
    const b = [...a];
    setProducts(b.sort(compareValues("productDto.productName")));
    console.log(products);
  }
  function sortByPrice(a) {
    const b = [...a];
    setProducts(b.sort(compareValues("productDto.productPrice")));
    console.log(products);
  }
  const { opacity } = props;
  return (
    <div className="list-all" style={{ opacity: `${opacity}` }}>
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
                          <div className="shopee-input__inner shopee-input__inner--normal search__input">
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
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div
                              className="shopee-input__suffix"
                              onClick={searchProducts}
                            >
                              <i className="shopee-input__suffix-icon shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 32"
                                >
                                  <path
                                    d="M31.7 31.7c-.4.4-1 .4-1.3 0l-8.9-8.9c-2.3 2-5.2 3.2-8.5 3.2-7.2 0-13-5.8-13-13S5.8 0 13 0s13 5.8 13 
                                    13c0 3.2-1.2 6.2-3.2 8.5l8.9 8.9c.4.3.4.9 0 1.3zM24 13c0-6.1-4.9-11-11-11S2 6.9 2 13s4.9 11 11 11 11-4.9 
                                    11-11z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </i>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span
              className="shopee-button shopee-button--primary shopee-button--large reset"
              onClick={resetProducts}
            >
              Làm mới
            </span>
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
            <div
              className="add-action shopee-button shopee-button--primary shopee-button--large"
              onClick={redic}
            >
              <i className="shopee-icon">
                <svg viewBox="0 0 32 32">
                  <path d="M17.5 2.5h-3v12h-12v3h12v12h3v-12h12v-3h-12v-12z"></path>
                </svg>
              </i>
              <span>Thêm 1 sản phẩm mới</span>
            </div>
            <div className="batch-action shopee-dropdown">
              <button
                type="button"
                className="batch-action-btn shopee-button shopee-button--large"
              >
                <span>Công cụ Xử lý sắp xếp</span>
                <i className="shopee-icon" style={{ marginLeft: "5px" }}>
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M28.2 11.1l-10.9 12s0 .1-.1.2c-.2.2-.5.3-.7.3-.3 
                    0-.5-.1-.7-.3 0 0 0-.1-.1-.2l-10.9-12c-.4-.4-.4-1 0-1.3.4-.4 
                    1-.4 1.3 0l10.4 11.3L26.9 9.8c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3z"
                    ></path>
                  </svg>
                </i>
              </button>
              <div className="shopee-popper">
                <ul className="shopee-dropdown-menu">
                  <li
                    className="mass-update-item shopee-dropdown-item"
                    onClick={() => sortByName(products)}
                  >
                    Sắp xếp theo tên
                  </li>
                  <li
                    className="mass-update-item shopee-dropdown-item"
                    onClick={() => sortByPrice(products)}
                  >
                    Sắp xếp theo giá
                  </li>
                  <li
                    className="mass-update-item shopee-dropdown-item"
                    onClick={() => sortBySoldQuantity(products)}
                  >
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
                      Giảm giá
                    </div>
                    <div className="shopee-order product-list-item__td product-variation__stock product-list-header-item text-overflow2 product-quantity">
                      Còn lại
                    </div>
                    <div className="shopee-order product-list-item__td product-variation__sales product-list-header-item text-overflow2 product-sold">
                      Đã bán
                    </div>
                    <div className="shopee-order product-list-item__td product-variation__sales product-list-header-item text-overflow2 product-status">
                      Trạng thái
                    </div>
                  </div>
                  <div className="product-action product-list-header-item text-overflow2 edit-product">
                    Sửa thông tin
                  </div>
                </div>
              </div>
              <div className="fixed-placeholder"></div>
            </div>
            <Product products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
