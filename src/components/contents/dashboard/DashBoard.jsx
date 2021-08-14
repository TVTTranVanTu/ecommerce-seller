import React from 'react';
import Slider from 'react-slick';
function DashBoard(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="page-content-wrapper">
            <div className="home">
                <div className="flex-box">
                    <div className="content">
                        <div className="flex-box">
                            <div className="main-colum">
                                <div className="banner card-offset">
                                    <a className="banner-box">
                                        <img src="https://cf.shopee.vn/file/bcf58e9ab5cf370d5102071c85b3e56b" className="banner-image" alt="banner-image"></img>
                                    </a>
                                </div>
                                <div className="card card-offset">
                                    <div className="title">
                                        Danh sách cần làm
                                        <p className="card-tips">
                                            Những việc bạn sẽ phải làm
                                        </p>
                                    </div>
                                    <div className="data-wrapper">
                                        <div className="status">
                                            <div className="todo-box">
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Chờ Xác Nhận</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Chờ Lấy Hàng</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Đã Xử Lý</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem hidden">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Đơn Hủy</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Trả Hàng / Hoàn Tiền Chờ Xử Lý</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Sản Phẩm Bị Tạm Khóa</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">Sản Phẩm Hết Hàng</p>
                                                </a>
                                                <a href="/portal/sale/?type=unpaid" className="to-do-box-aitem hidden">
                                                    <p className="item-title">0</p>
                                                    <p className="item-desc">
                                                        <span >Chương Trình Khuyến Mãi Chờ Xử Lý</span>
                                                        <span className="todo-new-icon">
                                                            <span className="text">New</span>
                                                        </span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="card card-offset">
                                    <div className="title">
                                        Danh sách cần làm
                                        <span className="title-tip">( Hôm nay 00:00 GMT+7 13:00 )</span>
                                        <p className="card-tips">
                                            Những việc bạn sẽ phải làm
                                        </p>
                                    </div>
                                    <div className="data-wrapper">
                                        <div className="status">
                                            <div className="content">
                                                <div className="chart">
                                                    <div className="item-title text-overflow">
                                                        Đã bán
                                                        <div className="popover popover--light">
                                                            <div className="popover__ref">
                                                                <i className="item-info-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-.875a6.125 6.125 0 1 0 0-12.25 6.125 6.125 0 0 0 0 12.25zm1.35-3.313c.22 0 .4.154.4.344 0 .19-.18.344-.4.344h-2.7c-.22 0-.4-.154-.4-.344 0-.19.18-.344.4-.344h.95V6.938H6.93c-.221 0-.4-.154-.4-.344 0-.19.179-.344.4-.344H8c.222 0 .4.154.4.344v4.218h.95zM8 4.875A.437.437 0 1 1 8 4a.437.437 0 0 1 0 .875z"></path>
                                                                    </svg>
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="item-number text-overflow">
                                                        <span> 0</span>
                                                    </p>
                                                    <div className="chart-box">

                                                    </div>
                                                </div>
                                                <div className="list-box">
                                                    <div className="item">
                                                        <div className="item-box text-overflow">
                                                            <div className="item-title text-overflow">
                                                                Lượt truy cập
                                                                <div className="popover popover--light" >
                                                                    <div className="popover__ref">
                                                                        <i className="item-info-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-.875a6.125 6.125 0 1 0 0-12.25 6.125 6.125 0 0 0 0 12.25zm1.35-3.313c.22 0 .4.154.4.344 0 .19-.18.344-.4.344h-2.7c-.22 0-.4-.154-.4-.344 0-.19.18-.344.4-.344h.95V6.938H6.93c-.221 0-.4-.154-.4-.344 0-.19.179-.344.4-.344H8c.222 0 .4.154.4.344v4.218h.95zM8 4.875A.437.437 0 1 1 8 4a.437.437 0 0 1 0 .875z">
                                                                                </path>
                                                                            </svg>
                                                                        </i>
                                                                    </div>
                                                                    <div className="popper popover__popper popover__popper--light with-arrow" >
                                                                        <div className="popover__content">Tổng số khách truy cập (xem trang sản phẩm) từ web và ứng dụng Shopee. Một khách xem nhiều sản phẩm chỉ tính là 1 khách truy cập.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="item-number text-overflow">
                                                                0
                                                            </p>
                                                            <div className="item-increase text-overflow">
                                                                <p className="text-overflow">
                                                                    Vs hôm qua
                                                                </p>
                                                                <div className="item-increase-number">
                                                                    <p className="text-overflow" style={{ lineHeight: "14px" }}>0.00%</p>
                                                                    <i className="item-increase-number-icon" style={{ color: "rgb(187, 189, 191)" }}>
                                                                        <svg>
                                                                            <rect x="3" y="7" width="9" height="2.029" rx=".5"></rect>
                                                                        </svg>
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-box text-overflow">
                                                            <div className="item-title text-overflow">
                                                                Lượt xem
                                                                <div className="popover popover--light" >
                                                                    <div className="popover__ref">
                                                                        <i className="item-info-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-.875a6.125 6.125 0 1 0 0-12.25 6.125 6.125 0 0 0 0 12.25zm1.35-3.313c.22 0 .4.154.4.344 0 .19-.18.344-.4.344h-2.7c-.22 0-.4-.154-.4-.344 0-.19.18-.344.4-.344h.95V6.938H6.93c-.221 0-.4-.154-.4-.344 0-.19.179-.344.4-.344H8c.222 0 .4.154.4.344v4.218h.95zM8 4.875A.437.437 0 1 1 8 4a.437.437 0 0 1 0 .875z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </div>
                                                                    <div className="popper popover__popper popover__popper--light with-arrow" >
                                                                        <div className="popover__content">Tổng số lần xem trang sản phẩm từ web và ứng dụng Shopee.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="item-number text-overflow">
                                                                0
                                                            </p>
                                                            <div className="item-increase text-overflow">
                                                                <p className="text-overflow">
                                                                    Vs hôm qua
                                                                </p>
                                                                <div className="item-increase-number">
                                                                    <p className="text-overflow">0.00%</p>
                                                                    <i className="item-increase-number-icon" >
                                                                        <svg>
                                                                            <rect x="3" y="7" width="9" height="2.029" rx=".5">
                                                                            </rect>
                                                                        </svg>
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item" style={{ borderBottom: "0" }}>
                                                        <div className="item-box text-overflow">
                                                            <div className="item-title text-overflow">
                                                                Dơn hàng
                                                                <div className="popover popover--light" >
                                                                    <div className="popover__ref">
                                                                        <i className="item-info-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-.875a6.125 6.125 0 1 0 0-12.25 6.125 6.125 0 0 0 0 12.25zm1.35-3.313c.22 0 .4.154.4.344 0 .19-.18.344-.4.344h-2.7c-.22 0-.4-.154-.4-.344 0-.19.18-.344.4-.344h.95V6.938H6.93c-.221 0-.4-.154-.4-.344 0-.19.179-.344.4-.344H8c.222 0 .4.154.4.344v4.218h.95zM8 4.875A.437.437 0 1 1 8 4a.437.437 0 0 1 0 .875z">
                                                                                </path>
                                                                            </svg>
                                                                        </i>
                                                                    </div>
                                                                    <div className="popper popover__popper popover__popper--light with-arrow" >
                                                                        <div className="popover__content">Tổng số khách truy cập (xem trang sản phẩm) từ web và ứng dụng Shopee. Một khách xem nhiều sản phẩm chỉ tính là 1 khách truy cập.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="item-number text-overflow">
                                                                0
                                                            </p>
                                                            <div className="item-increase text-overflow">
                                                                <p className="text-overflow">
                                                                    Vs hôm qua
                                                                </p>
                                                                <div className="item-increase-number">
                                                                    <p className="text-overflow" style={{ lineHeight: "14px" }}>0.00%</p>
                                                                    <i className="item-increase-number-icon" style={{ color: "rgb(187, 189, 191)" }}>
                                                                        <svg>
                                                                            <rect x="3" y="7" width="9" height="2.029" rx=".5"></rect>
                                                                        </svg>
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-box text-overflow">
                                                            <div className="item-title text-overflow">
                                                                Tỷ lệ chuyển đổi
                                                                <div className="popover popover--light" >
                                                                    <div className="popover__ref">
                                                                        <i className="item-info-icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-.875a6.125 6.125 0 1 0 0-12.25 6.125 6.125 0 0 0 0 12.25zm1.35-3.313c.22 0 .4.154.4.344 0 .19-.18.344-.4.344h-2.7c-.22 0-.4-.154-.4-.344 0-.19.18-.344.4-.344h.95V6.938H6.93c-.221 0-.4-.154-.4-.344 0-.19.179-.344.4-.344H8c.222 0 .4.154.4.344v4.218h.95zM8 4.875A.437.437 0 1 1 8 4a.437.437 0 0 1 0 .875z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </div>
                                                                    <div className="popper popover__popper popover__popper--light with-arrow" >
                                                                        <div className="popover__content">Tổng số lần xem trang sản phẩm từ web và ứng dụng Shopee.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="item-number text-overflow">
                                                                0.00%
                                                            </p>
                                                            <div className="item-increase text-overflow">
                                                                <p className="text-overflow">
                                                                    Vs hôm qua
                                                                </p>
                                                                <div className="item-increase-number">
                                                                    <p className="text-overflow">0.00%</p>
                                                                    <i className="item-increase-number-icon" >
                                                                        <svg>
                                                                            <rect x="3" y="7" width="9" height="2.029" rx=".5">
                                                                            </rect>
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
                            <div className="aside-column"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;