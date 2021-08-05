import React from 'react';

function OrderList(props) {
    return (
        <div className="portal-sale-container">
            <div className="shopee-fixed-top-card">
                <div className="fixed-container">
                    <div className="portal-panel">
                        <div className="list-tabs" >
                            <div className="tabs shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
                                <div className="shopee-tabs__nav">
                                    <div className="shopee-tabs__nav-warp">
                                        <div className="shopee-tabs__nav-tabs" style={{ transform: "translateX(0px)" }}>
                                            <div className="shopee-tabs__nav-tab active" >
                                                <div className="tab-label">
                                                    <span >Tất cả</span>
                                                </div>
                                            </div><div className="shopee-tabs__nav-tab" >
                                                <div className="tab-label">
                                                    <span >Chờ xác nhận</span>
                                                </div>
                                            </div><div className="shopee-tabs__nav-tab" >
                                                <div className="tab-label">
                                                    <span >Chờ lấy hàng</span>
                                                </div>
                                            </div><div className="shopee-tabs__nav-tab" >
                                                <div className="tab-label">
                                                    <span >Đang giao</span>
                                                </div>
                                            </div><div className="shopee-tabs__nav-tab" >
                                                <div className="tab-label">
                                                    <span >Đã giao</span>
                                                </div>
                                            </div><div className="shopee-tabs__nav-tab" >
                                                <div className="tab-label">
                                                    <span >Đơn huỷ</span>
                                                </div>
                                            </div><div className="shopee-tabs__nav-tab" >
                                                <div className="tab-label">
                                                    <span >Trả hàng/Hoàn tiền</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopee-tabs__ink-bar" style={{ width: "71px", transform: "translateX(0px)" }}></div>
                                    </div>
                                </div>
                                <div className="shopee-tabs__content">
                                    <div className="shopee-tabs-tabpane"></div>
                                    <div className="shopee-tabs-tabpane"></div>
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
                <div className="fixed-placeholder"></div>
            </div>
            <div className="page fulfillment-order">
                <div className="fulfillment-order-page-content">
                    <div className="order-list">
                        <div className="padding-wrap">
                            <div className="order-search-pannel order-search-panel">
                                <div className="order-hints">
                                    <div className="search-warpper">
                                        <div className="shopee-input order-search-btn">
                                            <div className="shopee-input__inner shopee-input__inner--normal">
                                                <input type="text" placeholder="Tìm đơn hàng" clearable="true" resize="vertical" rows="2" minrows="2" maxlength="50" restrictiontype="input" max="Infinity" min="-Infinity" className="shopee-input__input" />
                                                <div className="shopee-input__suffix">
                                                    <i className="shopee-input__suffix-icon shopee-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                            <path d="M31.7 31.7c-.4.4-1 .4-1.3 0l-8.9-8.9c-2.3 2-5.2 3.2-8.5 3.2-7.2 0-13-5.8-13-13S5.8 0 13 0s13 5.8 13 13c0 3.2-1.2 6.2-3.2 
                                                                8.5l8.9 8.9c.4.3.4.9 0 1.3zM24 13c0-6.1-4.9-11-11-11S2 6.9 2 13s4.9 11 11 11 11-4.9 11-11z" fillRule="evenodd" clipRule="evenodd"></path>
                                                        </svg>
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-panel-header">
                                <div className="title">
                                    Đơn hàng
                                </div>
                                <div className="more-action">
                                    <div className="tab-buttons">
                                        <button type="button" className="ship-btn shopee-button shopee-button--primary shopee-button--large">
                                            <i className="shopee-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M4.035 4h7.923l-.238-1.105a.5.5 0 0 0-.49-.395H4.763a.5.5 0 0 0-.489.395L4.035 4zm9.471.065A2 2 0 0 1 15 6v7a2 
                                                    2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 1.486-1.933l.32-1.488A2 2 0 0 1 4.763 1h6.469a2 2 0 0 1 1.955 1.579l.32 1.486zM13.5 
                                                    6h-11v7a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zM4.75 8h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm0 
                                                    3h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5z"></path>
                                                </svg>
                                            </i>
                                            <span>
                                                Giao Hàng Loạt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-list-pannel">
                            <div className="order-list-section">
                                <div className="shopee-fixed-top-card">
                                    <div className="fixed-container" >
                                        <div className="order-list-header">
                                            <span className="item-product">Sản phẩm</span>
                                            <span className="item-total">Tổng Đơn hàng</span>
                                            <span className="item-status">
                                                Trạng thái
                                                <span className="item-countdown">Đếm ngược</span>
                                            </span>
                                            <span className="item-action">Thao tác</span>
                                        </div>
                                    </div>
                                    <div className="fixed-placeholder" ></div>
                                </div>
                                <div className="no-data">
                                    <div className="shopee-default-page">
                                        <i className="shopee-default-page__icon shopee-icon normal">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 93">
                                                <g fill="none" fillRule="evenodd" transform="translate(-2)">
                                                    <rect width="96" height="96">
                                                    </rect>
                                                    <ellipse cx="47" cy="87" fill="#F2F2F2" rx="45" ry="6"></ellipse>
                                                    <path fill="#FFF" stroke="#D8D8D8" d="M79,55.5384191 L79,84.1647059 C79,85.1783108 78.1452709,86 77.0909091,86 L17.9090909,86 C16.8547291,86 16,85.1783108 16,84.1647059 L16,9.83529412 
                                                    C16,8.82168917 16.8547291,8 17.9090909,8 L77.0909091,8 C78.1452709,8 79,8.82168917 79,9.83529412 L79,43.6504538 L79,55.5384191 Z"></path>
                                                    <path fill="#FAFAFA" stroke="#D8D8D8" d="M64.32,4.0026087 L56.62,4.0026087 L56.62,3.5026087 C56.62,2.92262436 56.214985,2.5 55.68,2.5 L40.32,2.5 C39.785015,2.5 
                                                    39.38,2.92262436 39.38,3.5026087 L39.38,4.0026087 L31.68,4.0026087 C31.433015,4.0026087 31.22,4.22488523 31.22,4.50434783 L31.22,12.5182609 C31.22,12.7977235 
                                                    31.433015,13.02 31.68,13.02 L64.32,13.02 C64.566985,13.02 64.78,12.7977235 64.78,12.5182609 L64.78,4.50434783 C64.78,4.22488523 64.566985,4.0026087 64.32,4.0026087 Z"></path>
                                                    <g fill="#D8D8D8" transform="translate(83)">
                                                        <circle cx="10" cy="13" r="3" opacity=".5"></circle>
                                                        <circle cx="2" cy="9" r="2" opacity=".3"></circle>
                                                        <path d="M8.5,1 C7.67157288,1 7,1.67157288 7,2.5 C7,3.32842712 7.67157288,4 8.5,4 C9.32842712,4 10,3.32842712 10,2.5 C10,1.67157288 9.32842712,1 8.5,1 Z M8.5,7.10542736e-15 
                                                        C9.88071187,7.10542736e-15 11,1.11928813 11,2.5 C11,3.88071187 9.88071187,5 8.5,5 C7.11928813,5 6,3.88071187 6,2.5 C6,1.11928813 7.11928813,7.10542736e-15 8.5,7.10542736e-15 Z" opacity=".3"></path>
                                                    </g>
                                                    <path fill="#D8D8D8" d="M48.5,43 C48.7761424,43 49,43.2238576 49,43.5 C49,43.7761424 48.7761424,44 48.5,44 L26.5,44 C26.2238576,44 26,43.7761424 26,43.5 C26,43.2238576 26.2238576,43 
                                                    26.5,43 L48.5,43 Z M68.5,34 C68.7761424,34 69,34.2238576 69,34.5 C69,34.7761424 68.7761424,35 68.5,35 L26.5,35 C26.2238576,35 26,34.7761424 26,34.5 C26,34.2238576 26.2238576,34 26.5,34 
                                                    L68.5,34 Z M68.5,25 C68.7761424,25 69,25.2238576 69,25.5 C69,25.7761424 68.7761424,26 68.5,26 L26.5,26 C26.2238576,26 26,25.7761424 26,25.5 C26,25.2238576 26.2238576,25 26.5,25 L68.5,25 Z"></path>
                                                </g>
                                            </svg>
                                        </i>
                                        <div className="shopee-default-page__content">
                                            Không tìm thấy đơn hàng
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

export default OrderList;