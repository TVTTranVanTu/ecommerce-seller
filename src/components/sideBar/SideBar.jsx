import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar(props) {
  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const [hidden3, setHidden3] = useState(false);
  const [hidden4, setHidden4] = useState(false);
  return (
    <div className="sidebar-container">
      <div className="sidebar-container">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-box">
              <div
                className="sidebar-menu-item"
                onClick={() => setHidden1(!hidden1)}
              >
                <img
                  alt="icon"
                  src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0"
                  className="sidebar-menu-item-icon"
                />
                <span className="sidebar-menu-item-text">Quản lý đơn hàng</span>
                <span className="sidebar-menu-item-space"></span>
                <i
                  className="sidebar-menu-item-collapse icon"
                  style={{
                    transform: `${
                      hidden1 === true ? "rotate(0deg)" : "rotate(-180deg)"
                    }`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                  </svg>
                </i>
              </div>
              <ul
                className={`${
                  hidden1 === false ? "sidebar-submenu" : "hidden"
                }`}
              >
                <li className="sidebar-submenu-item">
                  <Link
                    to="/portal/sale/order"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Tất cả</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-box">
              <div
                className="sidebar-menu-item"
                onClick={() => setHidden2(!hidden2)}
              >
                <img
                  alt="icon_manager"
                  src="https://cf.shopee.vn/file/3fa3bdb20eb201ae3f157ee8d11a39d5"
                  className="sidebar-menu-item-icon"
                />
                <span className="sidebar-menu-item-text">Quản lý sản phẩm</span>
                <span className="sidebar-menu-item-space"></span>
                <i
                  className="sidebar-menu-item-collapse icon"
                  style={{
                    transform: `${
                      hidden2 === true ? "rotate(0deg)" : "rotate(-180deg)"
                    }`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                  </svg>
                </i>
              </div>
              <ul
                className={`${
                  hidden2 === false ? "sidebar-submenu" : "hidden"
                }`}
              >
                <li className="sidebar-submenu-item">
                  <Link
                    to="/product/list-product/all"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Tất Cả Sản Phẩm</span>
                  </Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link
                    to="/product/add-product"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Thêm Sản Phẩm</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-box">
              <div
                className="sidebar-menu-item"
                onClick={() => setHidden3(!hidden3)}
              >
                <img
                  alt="icon"
                  src="https://cf.shopee.vn/file/6b1ffcde1ff12621088110f419a5283a"
                  className="sidebar-menu-item-icon"
                />
                <span className="sidebar-menu-item-text">Quản Lý Shop</span>
                <span className="sidebar-menu-item-space"></span>
                <i
                  className="sidebar-menu-item-collapse icon"
                  style={{
                    transform: `${
                      hidden3 === true ? "rotate(0deg)" : "rotate(-180deg)"
                    }`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                  </svg>
                </i>
              </div>
              <ul
                className={`${
                  hidden3 === false ? "sidebar-submenu" : "hidden"
                }`}
              >
                <li className="sidebar-submenu-item">
                  <Link
                    to="/portal/settings/shop/rating"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Đánh Giá Shop</span>
                  </Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link
                    to="/portal/settings/shop/profile"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Hồ Sơ Shop</span>
                  </Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link
                    to="/portal/decoration"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Trang Trí Shop</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-box">
              <div
                className="sidebar-menu-item"
                onClick={() => setHidden4(!hidden4)}
              >
                <img
                  alt="icon"
                  src="https://cf.shopee.vn/file/789f116a0778cf137519cadb1165d70f"
                  className="sidebar-menu-item-icon"
                />
                <span className="sidebar-menu-item-text">Thiết Lập Shop</span>
                <span className="sidebar-menu-item-space"></span>
                <i
                  className="sidebar-menu-item-collapse icon"
                  style={{
                    transform: `${
                      hidden4 === true ? "rotate(0deg)" : "rotate(-180deg)"
                    }`,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                  </svg>
                </i>
              </div>
              <ul
                className={`${
                  hidden4 === false ? "sidebar-submenu" : "hidden"
                }`}
              >
                <li className="sidebar-submenu-item">
                  <Link
                    to="/portal/settings/account"
                    className="sidebar-submenu-item-link"
                  >
                    <span>Tài Khoản</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
