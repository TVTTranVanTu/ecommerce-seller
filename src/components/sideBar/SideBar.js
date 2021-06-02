import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    const [hidden1, setHidden1] = useState(false);
    const [hidden2, setHidden2] = useState(false);
    const [hidden3, setHidden3] = useState(false);
    const [hidden4, setHidden4] = useState(false);
    const [hidden5, setHidden5] = useState(false);
    const [hidden6, setHidden6] = useState(false);
    const [hidden7, setHidden7] = useState(false);
    const [hidden8, setHidden8] = useState(false);
    const [hidden9, setHidden9] = useState(false);
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden1(!hidden1)}>
                            <img alt="image" src="https://cf.shopee.vn/file/c15905d5a6284687c4a6ad00d0feb511" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Vận chuyển</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden1 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden1 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/sale/shipment" className="sidebar-submenu-item-link">
                                    <span >Quản Lý Vận Chuyển</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/sale/ship" className="sidebar-submenu-item-link">
                                    <span >Giao Hàng Loạt</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/shop/logistics" className="sidebar-submenu-item-link">
                                    <span >Cài Đặt Vận Chuyển</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden2(!hidden2)}>
                            <img alt="image" src="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Quản lý đơn hàng</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden2 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden2 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/sale/order" className="sidebar-submenu-item-link">
                                    <span >Tất cả</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/sale/order?type=cancelled" className="sidebar-submenu-item-link">
                                    <span >Đơn huỷ</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/sale/returnlist" className="sidebar-submenu-item-link">
                                    <span >Trả Hàng / Hoàn Tiền</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden3(!hidden3)}>
                            <img alt="image" src="https://cf.shopee.vn/file/3fa3bdb20eb201ae3f157ee8d11a39d5" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Quản lý sản phẩm</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden3 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden3 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <Link to="/product/list-product" className="sidebar-submenu-item-link">
                                    <span >Tất Cả Sản Phẩm</span>
                                </Link>
                            </li>
                            <li className="sidebar-submenu-item">
                                <Link to="/product/add-product" className="sidebar-submenu-item-link">
                                    <span >Thêm Sản Phẩm</span>
                                </Link>
                            </li>
                            <li className="sidebar-submenu-item">
                                <Link to="/product/banned-product" className="sidebar-submenu-item-link">
                                    <span >Sản Phẩm Vi Phạm</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden4(!hidden4)}>
                            <img alt="image" src="https://cf.shopee.vn/file/2f9d62dd7e037c22608ac75dfb84a409" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Kênh Marketing</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden4 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden4 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/marketing" className="sidebar-submenu-item-link">
                                    <span >Kênh Marketing</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/marketing/pas/assembly" className="sidebar-submenu-item-link">
                                    <span >Quảng Cáo Shopee</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden5(!hidden5)}>
                            <img alt="image" src="https://cf.shopee.vn/file/f9e8756bcf783fe1783bf59577fdb263" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Tài Chính</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden5 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden5 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/finance/income" className="sidebar-submenu-item-link">
                                    <span >Doanh Thu</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/finance/wallet/shopeepay" className="sidebar-submenu-item-link">
                                    <span >Ví Shopee</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/finance/wallet/cards" className="sidebar-submenu-item-link">
                                    <span >Tài Khoản Ngân Hàng</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/finance/settings" className="sidebar-submenu-item-link">
                                    <span >Thiết lập Thanh Toán</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden6(!hidden6)}>
                            <img alt="image" src="https://cf.shopee.vn/file/09759afab8ae066ca5e1630bc19133a1" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Dữ Liệu</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden6 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden6 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/datacenter/" className="sidebar-submenu-item-link">
                                    <span >Phân Tích Bán Hàng</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/accounthealth/home" className="sidebar-submenu-item-link">
                                    <span >Hiệu Quả Hoạt Động</span>
                                    <span className="sidebar-new">
                                    </span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/seller-management" className="sidebar-submenu-item-link">
                                    <span >Shop Yêu Thích</span>
                                    <span className="sidebar-new">
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden7(!hidden7)}>
                            <img alt="image" src="https://cf.shopee.vn/file/9f2ae273250a1a723d7d8892c9584c6d" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Chăm sóc khách hàng</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden7 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden7 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/assistant/basic" className="sidebar-submenu-item-link">
                                    <span >Trợ lý chat</span>
                                    <span className="sidebar-new">
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden8(!hidden8)}>
                            <img alt="image" src="https://cf.shopee.vn/file/6b1ffcde1ff12621088110f419a5283a" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Quản Lý Shop</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden8 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden8 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/shop/rating" className="sidebar-submenu-item-link">
                                    <span >Đánh Giá Shop</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/shop/profile" className="sidebar-submenu-item-link">
                                    <span >Hồ Sơ Shop</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/decoration" className="sidebar-submenu-item-link">
                                    <span >Trang Trí Shop</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/category" className="sidebar-submenu-item-link">
                                    <span >Danh Mục Của Shop</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/shop/reports" className="sidebar-submenu-item-link">
                                    <span >Báo Cáo Của Tôi</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-menu-box">
                        <div className="sidebar-menu-item" onClick={() => setHidden9(!hidden9)}>
                            <img alt="image" src="https://cf.shopee.vn/file/789f116a0778cf137519cadb1165d70f" className="sidebar-menu-item-icon" />
                            <span className="sidebar-menu-item-text">Thiết Lập Shop</span>
                            <span className="sidebar-menu-item-space"></span>
                            <i className="sidebar-menu-item-collapse icon" style={{ transform: `${hidden9 === true ? "rotate(0deg)" : "rotate(-180deg)"}` }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path></svg>
                            </i>
                        </div>
                        <ul className={`${hidden9 === false ? 'sidebar-submenu' : 'hidden'}`}>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/shop/address" className="sidebar-submenu-item-link">
                                    <span >Địa Chỉ</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/basic" className="sidebar-submenu-item-link">
                                    <span >Thiết Lập Shop</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/settings/account" className="sidebar-submenu-item-link">
                                    <span >Tài Khoản</span>
                                </a>
                            </li>
                            <li className="sidebar-submenu-item">
                                <a href="/portal/partner-platform/shop" className="sidebar-submenu-item-link">
                                    <span >Nền tảng đối tác (Kết nối API)</span>
                                    <span className="sidebar-new"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;