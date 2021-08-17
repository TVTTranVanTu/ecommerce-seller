import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../actions/UserAction";
import logo from "../../assets/image/logo1.png";
function Header(props) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="header-bar">
      {userInfo ? (
        <div className="header-content">
          <Link to="/" className="header-logo">
            <div className="logo_image">
              <img alt="logo" src={logo} />
            </div>
          </Link>
          <div className="content-box">
            <Link to="/" className="breadcrumb-text">
              Kênh Người Bán
            </Link>
          </div>
          <div className="info">
            <div className="popover">
              <div className="popover-ref">
                <div className="account-info__box">
                  <div className="account-info">
                    <img
                      className="account-avatar"
                      src={
                        userInfo.userDto.avatar
                          ? userInfo.userDto.avatar
                          : "https://cf.shopee.vn/file/2b304d6c8f0027d3bbb2c54703726468"
                      }
                      alt="avt"
                    ></img>
                    <span className="account-name">
                      {userInfo.userDto.username}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="popper popover__popper popover__popper--light with-arrow headbar-account-tooltip"
                x-placement="bottom"
              >
                <div className="popover__content">
                  <ul className="account-dropdown">
                    <li className="account-dropdown-item">
                      <Link
                        to="/portal/settings/account"
                        style={{ display: "flex", color: "#000" }}
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M23.9 12.9l-1.6-1.6 6.2-6.2 1.6 1.6-6.2 6.2zM32 4.8l-1.6-1.6-1 1L31 5.8l1-1zM19.7 15.6l2.6-1.4-1.3-1.3-1.3 2.7zm8.6-4v16.3c0 .9-.7 1.6-1.6 1.6H1.6c-.9 0-1.6-.7-1.6-1.6V6.2c0-.9.7-1.6 1.6-1.6h24.2l-2 2H2v11.9l5.6-3.8 7.2 6.1 6.7-3 4.7 4.1v-8.4l2.1-1.9zm-2 15.9v-2.9l-5.1-4.4-6.7 3-7-6L2 21v6.5h24.3z"></path>
                          </svg>
                        </span>
                        <span className="text">Hồ Sơ Shop</span>
                      </Link>
                    </li>
                    <li className="account-dropdown-item">
                      <span className="icon">
                        <svg
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M31.77 15.42a.93.93 0 0 1 .21.52 1 1 0 0 1-.26.62l-8.07 8a1 1 0 1 1-1.38-1.38L28.62 17H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h23.6l-6.32-6.33a1 1 0 1 1 1.38-1.38s8.08 8.09 8.11 8.13zM16 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4h-2z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="text" onClick={signoutHandler}>
                        Đăng xuất
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-action">
            <div className="popover popover--light">
              <div className="popover__ref">
                <div className="dropdown-button-box">
                  <div className="dropdown-button">
                    <i className="dropdown-button-icon icon">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V1.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 2.718 1H1.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM1.282 0h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C.046 3.325 0 3.164 0 2.718V1.282C0 .836.046.675.134.512A.909.909 0 0 1 .512.134C.675.046.836 0 1.282 0zM1 7.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V7.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 2.718 7H1.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM1.282 6h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C.046 9.325 0 9.164 0 8.718V7.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378C.675 6.046.836 6 1.282 6zM1 13.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275v-1.436c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 2.718 13H1.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM1.282 12h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM7 1.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V1.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 8.718 1H7.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM7.282 0h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C6.046 3.325 6 3.164 6 2.718V1.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378C6.675.046 6.836 0 7.282 0zM7 7.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V7.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 8.718 7H7.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM7.282 6h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C6.046 9.325 6 9.164 6 8.718V7.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM7 13.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275v-1.436c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 8.718 13H7.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM7.282 12h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM13 1.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V1.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 14.718 1h-1.436c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM13.282 0h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V1.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM13 7.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V7.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 14.718 7h-1.436c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM13.282 6h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V7.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM13 13.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275v-1.436c0-.181-.002-.245-.007-.275a2.248 2.248 0 0 0-.275-.007h-1.436c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM13.282 12h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
              <div className="popper popover__popper popover__popper--light with-arrow category-buttons-popover">
                <div className="popover__content">
                  <div className="category-popover-box">
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-product.f54d9f2.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Sản phẩm</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-category.54362e1.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M8 25.5v-2h22v2H8zm0-10h22v2H8v-2zm0-8h22v2H8v-2zM1.6 23.2h2.8V26H1.6v-2.8zm0-8.1h2.8v2.8H1.6v-2.8zm0-8h2.8v2.8H1.6V7.1z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Danh mục của Shop</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-sales.fef6c9b.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M28 16.9v12.8H4V16.6c-1-.9-1.7-2.6-1.7-4.1L5.7 2.2h20.6l3.4 10.3c.1 1.8-.4 3.5-1.7 4.4zM5.7 28h20.6v-3.4H5.7V28zm0-5.1h20.6v-5.2c-.3 0-.5.1-.9.1-1.3 0-2.7-.7-3.4-1.7-.7 1-1.6 1.7-3 1.7-1.2 0-2.3-.9-3-1.7-.7.9-1.8 1.7-3 1.7-1.4 0-2.3-.7-3-1.7-.8 1-2.2 1.7-3.5 1.7-.3 0-.5 0-.8-.1v5.2zM25.2 4H6.8l-2.3 6.9h22.9L25.2 4zM4 12.6C4.2 14 5.3 16 6.5 16s2.7 0 2.7-1.7h1.7s0 1.7 2.1 1.7 2.1-1.7 2.1-1.7h1.8S16.8 16 19 16c2.1 0 2.1-1.7 2.1-1.7H23s0 1.7 2.7 1.7c2.5 0 2.5-3.4 2.5-3.4H4z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Đơn Hàng</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-adsportal.f3779a5.png)",
                          }}
                        >
                          <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M23.59 30.5H8.4l-2-9.71-1.22 1.28-4.57-4.54L16 1l.72.75 14.67 15.78-4.57 4.54-1.1-1.16zM10 28.5h12l2.6-11.7 2.28 2.41 1.74-1.73L16 4 3.39 17.47l1.74 1.73 2.43-2.57zM18.22 14H20l-6.22 9H12zM13 14a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6 5a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Kênh Marketing</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-income.83c58c7.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M27.8 27.1H8.5c-1 0-1.8-.8-1.8-1.8v-1.8h1.8v.9c0 .5.4.9.9.9H27c.5 0 .9-.4.9-.9V12.2c0-.5-.4-.9-.9-.9h-1v-.9c0-.5-.4-.9-.9-.9h2.6c1 0 1.8.8 1.8 1.8v14c.1 1-.7 1.8-1.7 1.8zm-5.3-5.2H3.2c-1 0-1.8-.8-1.8-1.8v-14c0-1 .8-1.8 1.8-1.8h19.3c1 0 1.8.8 1.8 1.8v14c0 1-.8 1.8-1.8 1.8zm0-15c0-.5-.4-.9-.9-.9H4.1c-.5 0-.9.4-.9.9v12.3c0 .5.4.9.9.9h17.6c.5 0 .9-.4.9-.9V6.9zm-7 8c0 1.1-.8 2.2-2.1 2.4v1.1h-1v-1.1c-1.4-.2-2.2-1.1-2.2-1.1l.8-1.1s.9.9 1.9.9c.6 0 1.1-.4 1.1-1 0-1.4-3.7-1.2-3.7-3.7 0-1.2.9-2.1 2.1-2.3V7.8h1v1.1c1.3.1 1.9.9 1.9.9l-.5 1.2s-.8-.7-1.8-.7c-.7 0-1.1.4-1.1 1-.1 1.3 3.6 1.1 3.6 3.6z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Doanh thu</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-wallet.b00fc46.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M27.4 30H4.6c-1 0-1.8-.8-1.8-1.8V10.7c0-1 .8-1.8 1.8-1.8l21-7c1 0 1.8.8 1.8 1.8V9c1 0 1.8.8 1.8 1.8v17.5c-.1.9-.8 1.7-1.8 1.7zM25.6 4.6c0-.5-.4-.9-.9-.9L10.3 9h15.3V4.6zm1.8 14.9h-3.5v1.8h3.5v-1.8zm0 3.5h-5.3v-5.3h5.3v-6.1c0-.5-.4-.9-.9-.9h-21c-.5 0-.9.4-.9.9v15.8c0 .5.4.9.9.9h21c.5 0 .9-.4.9-.9V23z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Ví Shopee</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-data-center.86a43e9.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M30 6.4l-7.7 7.7c-.4.4-1 .4-1.3 0l-5.6-4.9-7.2 7.2c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l7.9-7.9c.4-.4 1-.4 1.3 0l5.6 4.9 6.9-6.9h-1.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1h4.3c.3 0 .6.2.8.4.1.3.3.6.3.9v4.3c0 .5-.4 1-1 1s-1-.4-1-1V6.4zM10.2 27.2h4.3V16.8c0-.5.4-1 1-1 .5 0 1 .4 1 1v10.4h4.3v-6.5c0-.5.4-1 1-1s1 .4 1 1v6.5h4.3v-8.8c0-.5.4-1 1-1s1 .4 1 1v8.8h1c.5 0 1 .4 1 1s-.4 1-1 1H1c-.5 0-1-.4-1-1V4.6c0-.5.4-1 1-1s1 .4 1 1v22.6h6.3v-6.5c0-.5.4-1 1-1s1 .4 1 1v6.5z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Phân Tích Bán Hàng</span>
                    </div>
                    <div className="category-item">
                      <div className="item-container">
                        <div
                          className="item-icon"
                          style={{
                            backgroundImage:
                              "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-settings.43459aa.png)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M31.3 16c0 2-1.5 3.6-3.5 3.8-.2.7-.5 1.2-.8 1.9 1.2 1.5 1.2 3.7-.2 5.2-1.4 1.4-3.6 1.4-5.2.2-.6.3-1.2.6-1.9.8-.2 2-1.8 3.5-3.8 3.5s-3.6-1.5-3.8-3.5c-.7-.2-1.2-.5-1.9-.8-1.5 1.2-3.7 1.2-5.2-.2-1.4-1.4-1.4-3.6-.2-5.2-.3-.6-.6-1.2-.8-1.9C2.3 19.6.7 18 .7 16s1.5-3.6 3.5-3.8c.2-.7.5-1.2.8-1.9-1.2-1.5-1.2-3.7.2-5.1s3.6-1.4 5.2-.2c.6-.3 1.2-.6 1.9-.8.1-2 1.7-3.5 3.7-3.5s3.6 1.5 3.8 3.5c.7.2 1.2.5 1.9.8 1.5-1.2 3.7-1.2 5.2.2 1.4 1.4 1.4 3.6.2 5.2.3.6.6 1.2.8 1.9 1.8.1 3.4 1.7 3.4 3.7zm-5-1.9c-.3-1.4-.9-2.9-1.7-4l.9-.9c.8-.8.8-1.9 0-2.7s-1.9-.8-2.7 0l-.9.9c-1.1-.9-2.6-1.4-4-1.7V4.5c0-1.1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9v1.1c-1.4.3-2.9.9-4 1.7l-.9-.7c-.8-.8-1.9-.8-2.7 0s-.8 1.9 0 2.7l.9.9c-.9 1.1-1.4 2.6-1.7 4H4.5c-1.1 0-1.9.9-1.9 1.9S3.5 18 4.5 18h1.1c.3 1.4.9 2.9 1.7 4l-.9.9c-.8.8-.8 1.9 0 2.7s1.9.8 2.7 0l.9-.9c1.1.9 2.6 1.4 4 1.7v1.1c0 1.1.9 1.9 1.9 1.9s1.9-.9 1.9-1.9v-1.1c1.4-.3 2.9-.9 4-1.7l.9.9c.8.8 1.9.8 2.7 0s.8-1.9 0-2.7l-.9-.9c.9-1.1 1.4-2.6 1.7-4h1.1c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9h-1zM16 21.7c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.5 5.7-5.7 5.7zm0-9.5c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8-1.7-3.8-3.8-3.8z"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="item-name">Thiết Lập Shop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-notification">
              <div className="notification-box">
                <div className="popover popover--light">
                  <div className="popover__ref">
                    <div className="notification-icon-wrap">
                      <div className="badge-x">
                        <button
                          type="button"
                          className="notification-icon button button--link button--normal"
                        >
                          <i className="icon">
                            <svg
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1h4zM8.5 0a.5.5 0 0 1 .5.5v.593a5.4 5.4 0 0 1 4.383 4.892l.54 7.015h.577a.5.5 0 1 1 0 1h-13a.5.5 0 1 1 0-1h.577l.54-7.015A5.4 5.4 0 0 1 7 1.093V.5a.5.5 0 0 1 .5-.5h1zM8 2a4.4 4.4 0 0 0-4.386 4.062L3.08 13h9.84l-.534-6.938A4.4 4.4 0 0 0 8 2z"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="popper popover__popper popover__popper--light with-arrow headbar-notification-popover">
                    <div className="popover__content">
                      <div>
                        <div className="notification-menu">
                          <div className="menu-header">
                            <div className="menu-header-left">
                              Thông báo đã nhận gần đây
                            </div>{" "}
                            <button
                              type="button"
                              disabled="disabled"
                              className="button button--link button--normal disabled"
                            >
                              <span>Đánh dấu đã đọc tất cả</span>
                            </button>
                          </div>
                          <div
                            id="headerbar-notification-menu-body"
                            className="menu-body"
                          >
                            <div className="infinite-scroll">
                              <div className="infinite-scroll-footer hidden">
                                <div>
                                  <div className="loading">
                                    <div className="loading-layout">
                                      <div className="loading-layout-item">
                                        <div className="skeleton container-square skeleton__square"></div>
                                        <div className="skeleton container-line skeleton__line">
                                          <div className="skeleton__line-first"></div>
                                          <div className="skeleton__line-second"></div>
                                        </div>
                                      </div>
                                      <div className="loading-layout-item">
                                        <div className="skeleton container-square skeleton__square"></div>
                                        <div className="skeleton container-line skeleton__line">
                                          <div className="skeleton__line-first"></div>
                                          <div className="skeleton__line-second"></div>
                                        </div>
                                      </div>
                                      <div className="loading-layout-item">
                                        <div className="skeleton container-square skeleton__square"></div>
                                        <div className="skeleton container-line skeleton__line">
                                          <div className="skeleton__line-first"></div>
                                          <div className="skeleton__line-second"></div>
                                        </div>
                                      </div>
                                      <div className="loading-layout-item">
                                        <div className="skeleton container-square skeleton__square"></div>
                                        <div className="skeleton container-line skeleton__line">
                                          <div className="skeleton__line-first"></div>
                                          <div className="skeleton__line-second"></div>
                                        </div>
                                      </div>
                                      <div className="loading-layout-item">
                                        <div className="skeleton container-square skeleton__square"></div>
                                        <div className="skeleton container-line skeleton__line">
                                          <div className="skeleton__line-first"></div>
                                          <div className="skeleton__line-second"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="menu-footer">
                            Xem tất cả thông báo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
