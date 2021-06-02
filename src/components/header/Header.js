import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/UserAction';
function Header(props) {
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { loading, error, userInfo } = userSignin;
    const signoutHandler = () => {
        dispatch(signout());
    }
    return (
        <div className="header-bar">
            {
                userInfo ? (
                    <div className="header-content">
                        <a href="/" className="header-logo">
                            <svg viewBox="0 0 420 134" xmlns="http://www.w3.org/2000/svg">
                                <g fillRule="evenodd">
                                    <path d="M76.968 94.081c-.741 6.073-4.447 10.939-10.187 13.374-3.194 1.356-7.476 2.086-10.871 
                            1.856-5.279-.2-10.241-1.478-14.812-3.809-1.664-.848-4.104-2.525-5.943-4.058-.42-.348-.635-.66-.232-1.228.43-.645 
                            2.13-3.102 2.398-3.507.362-.552.956-.58 1.5-.153.075.057.628.486.74.569 4.4 3.423 10.076 5.994 16.384 6.235 
                            7.955-.108 13.726-3.65 14.757-9.136 1.135-6.046-3.69-11.231-12.98-14.124-2.953-.92-10.38-3.872-11.75-4.672-6.474-3.77-9.488-8.717-9.058-14.807.657-8.438 
                            8.534-14.762 18.53-14.804 4.744-.01 9.194 1.036 13.159 2.695 1.459.61 4.176 2.066 5.145 2.785.677.494.625 
                            1.046.358 1.474-.395.656-1.57 2.483-2.043 3.245-.345.523-.773.583-1.38.2-5.112-3.41-10.37-4.567-15.103-4.661-6.828.134-11.978 
                            4.165-12.316 9.691-.09 4.992 3.729 8.613 11.833 11.378C71.83 77.964 78.17 84.24 76.968 94.08zM56.32 7.34c10.83 0 19.66 10.208 
                            20.073 22.986H36.248C36.66 17.548 45.489 7.34 56.32 7.34zM97.44 125.687c5.72-.155 10.355-4.776 10.844-10.504l.037-.692 
                            4.05-81.638v-.001a2.402 2.402 0 0 0-2.4-2.526H83.95C83.312 13.454 71.185 0 56.32 0 41.455 0 29.33 13.454 28.69 30.326H2.632a2.402 
                            2.402 0 0 0-2.35 2.588H.28l3.696 81.319.055 1.02c.564 5.658 4.7 10.215 10.322 10.425h.002l82.669.013.414-.004zM156.886 71.341c17.803 
                            5.329 24.807 11.993 23.687 22.693-.69 6.591-4.631 11.946-10.809 14.69-3.405 1.512-7.967 2.371-11.606 2.19-5.602-.115-10.897-1.376-15.8-3.763-1.77-.862-4.38-2.575-6.41-4.204l-.008-.006c-.949-.799-1.062-1.318-.413-2.28.168-.262.476-.728 1.186-1.8.61-.919 1.219-1.843 1.248-1.889.76-1.146 1.563-1.146 2.67-.385l.393.291.39.29c5.041 3.771 10.862 5.897 16.664 6.017 7.94-.245 13.54-3.81 14.44-9.1.99-5.818-3.817-10.806-13.208-13.545-3.285-.958-10.464-3.649-12.467-4.702-7.044-3.932-10.44-9.275-10.086-15.924.557-9.205 8.992-16.193 19.765-16.426 4.734-.091 9.472.8 14.037 2.613 1.645.654 4.528 2.145 5.567 2.886 1.209.853 1.209 1.442.62 2.544-.083.144-.397.598-1.21 1.761l-.003.004c-.859 1.227-1.116 1.598-1.192 1.724-.706.915-1.299 1.198-2.508.468-4.753-3.046-9.573-4.483-15.022-4.497-6.715.25-11.647 4.23-11.884 9.51.002 4.757 3.772 8.212 11.96 10.84zm49.938-2.667c10.861 0 19.83 8.768 19.87 19.512v20.99c0 1.21-.31 1.496-1.5 1.496h-4.99c-1.2 0-1.5-.285-1.5-1.497V88.25c-.026-6.48-5.337-11.721-11.88-11.721-6.527 0-11.83 5.217-11.88 11.675v20.972c0 1.043-.41 1.498-1.5 1.498h-5.002c-1.19 0-1.5-.44-1.5-1.498V44.961c0-1.102.31-1.496 1.5-1.496h5.002c1.072 0 1.5.415 1.5 1.496v27.635a19.956 19.956 0 0 1 11.88-3.922zm47.72 34.434c7.519 0 13.611-5.97 13.611-13.331 0-7.362-6.093-13.332-13.611-13.332-7.52 0-13.612 5.97-13.612 13.332 0 7.361 6.093 13.331 13.612 13.331zm.004-34.39c11.871 0 21.496 9.43 21.496 21.069 0 11.638-9.625 21.07-21.496 21.07-11.87 0-21.497-9.432-21.497-21.07 0-11.639 9.626-21.07 21.497-21.07zm132.809 16.178h23.813c-1.712-4.86-6.694-8.492-12.012-8.492-5.514 0-10.239 3.395-11.801 8.492zm29.72 7.726l-.095-.002h-30.114c.763 3.867 3.42 7.16 7.093 9.003.951.454 1.988.832 3.094 1.13 5.38 1.125 11.556.305 16.263-3.876.067-.075.195-.155.333-.276.788-.696 1.343-.52 1.962.252 0 0 .884 1.228 2.463 3.741.68 1.06.63 1.57-.51 2.744-.047.047-.136.13-.268.246a13.8 13.8 0 0 1-.775.629c-.856.645-1.88 1.29-3.073 1.89-4.41 2.22-9.844 3.266-16.303 2.489-.215-.033-.386-.06-.551-.088v.012l-.368-.069c-4.721-.88-8.962-3.232-12.082-6.666l-.022-.025a20.542 20.542 0 0 1-5.163-11.136h-.005l-.033-.274c-.1-.858-.152-1.722-.152-2.592 0-11.634 9.123-21.07 20.381-21.07 11.26 0 20.381 9.435 20.381 21.07v.156c.003.055.005.113.005.177 0 1.355-1.037 2.473-2.351 2.532a2.957 2.957 0 0 1-.11.003zM303.78 102.999c7.383 0 13.367-5.968 13.367-13.331 0-7.363-5.984-13.332-13.367-13.332-7.257 0-13.183 5.774-13.363 12.986v.687c.182 7.218 6.108 12.99 13.363 12.99zm.004-34.391c11.666 0 21.125 9.433 21.125 21.07s-9.459 21.07-21.125 21.07a21.068 21.068 0 0 1-13.367-4.754v24.738c0 1.11-.31 1.496-1.5 1.496h-4.758c-1.19 0-1.5-.395-1.5-1.496V70.104c0-1.163.31-1.496 1.5-1.496h4.758c1.19 0 1.5.363 1.5 1.496v3.258a21.07 21.07 0 0 1 13.367-4.754zm36.387 16.288h23.813c-1.712-4.86-6.694-8.492-12.012-8.492-5.514 0-10.239 3.395-11.801 8.492zm32.176 4.858l-.001.156c.004.055.005.113.005.177 0 1.355-1.036 2.473-2.35 2.532a2.96 2.96 0 0 1-.206 0h-30.114c.764 3.868 3.42 7.161 7.094 9.004.951.454 1.988.832 3.094 1.13 5.38 1.125 11.555.305 16.262-3.876.068-.075.195-.155.333-.276.789-.696 1.344-.52 1.963.252 0 0 .884 1.228 2.462 3.741.68 1.06.63 1.57-.51 2.744-.046.047-.135.13-.267.246-.216.19-.475.401-.775.629-.856.645-1.88 1.29-3.073 1.89-4.41 2.22-9.844 3.266-16.303 2.489-.215-.033-.386-.06-.551-.088v.012l-.368-.069c-4.721-.88-8.962-3.232-12.082-6.666l-.022-.025a20.541 20.541 0 0 1-5.163-11.136h-.005l-.033-.274a22.122 22.122 0 0 1-.153-2.592c0-11.634 9.124-21.07 20.382-21.07 11.259 0 20.38 9.435 20.38 21.07z"></path>
                                </g></svg></a>
                        <div className="content-box">
                            <a href="/" className="breadcrumb-text">Kênh Người Bán</a>
                        </div>
                        <div className="info">
                            <div className="popover">
                                <div className="popover-ref">
                                    <div className="account-info__box">
                                        <div className="account-info">
                                            <img className="account-avatar" src={userInfo.userDto.avatar ? (userInfo.userDto.avatar) : ("https://cf.shopee.vn/file/2b304d6c8f0027d3bbb2c54703726468")} alt="avt"></img>
                                            <span className="account-name">{userInfo.userDto.username}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="popper popover__popper popover__popper--light with-arrow headbar-account-tooltip" x-placement="bottom">
                                    <div className="popover__content">
                                        <ul className="account-dropdown">
                                            <li className="account-dropdown-item">
                                                <span className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                        <path d="M23.9 12.9l-1.6-1.6 6.2-6.2 1.6 1.6-6.2 6.2zM32 4.8l-1.6-1.6-1 1L31 5.8l1-1zM19.7 15.6l2.6-1.4-1.3-1.3-1.3 2.7zm8.6-4v16.3c0 .9-.7 1.6-1.6 1.6H1.6c-.9 0-1.6-.7-1.6-1.6V6.2c0-.9.7-1.6 1.6-1.6h24.2l-2 2H2v11.9l5.6-3.8 7.2 6.1 6.7-3 4.7 4.1v-8.4l2.1-1.9zm-2 15.9v-2.9l-5.1-4.4-6.7 3-7-6L2 21v6.5h24.3z"></path>
                                                    </svg>
                                                </span>
                                                <span className="text">Hồ Sơ Shop</span>
                                            </li>
                                            <li className="account-dropdown-item">
                                                <span className="icon">
                                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.77 15.42a.93.93 0 0 1 .21.52 1 1 0 0 1-.26.62l-8.07 8a1 1 0 1 1-1.38-1.38L28.62 17H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h23.6l-6.32-6.33a1 1 0 1 1 1.38-1.38s8.08 8.09 8.11 8.13zM16 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4h-2z" fillRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                                <span className="text" onClick={signoutHandler}>Đăng xuất</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-action">
                            <div className="popover popover--light" >
                                <div className="popover__ref">
                                    <div className="dropdown-button-box">
                                        <div className="dropdown-button">
                                            <i className="dropdown-button-icon icon">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V1.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 2.718 1H1.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM1.282 0h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C.046 3.325 0 3.164 0 2.718V1.282C0 .836.046.675.134.512A.909.909 0 0 1 .512.134C.675.046.836 0 1.282 0zM1 7.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V7.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 2.718 7H1.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM1.282 6h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C.046 9.325 0 9.164 0 8.718V7.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378C.675 6.046.836 6 1.282 6zM1 13.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275v-1.436c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 2.718 13H1.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM1.282 12h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM7 1.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V1.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 8.718 1H7.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM7.282 0h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C6.046 3.325 6 3.164 6 2.718V1.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378C6.675.046 6.836 0 7.282 0zM7 7.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V7.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 8.718 7H7.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM7.282 6h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378C6.046 9.325 6 9.164 6 8.718V7.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM7 13.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275v-1.436c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 8.718 13H7.282c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM7.282 12h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H7.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM13 1.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V1.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 14.718 1h-1.436c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM13.282 0h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V1.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM13 7.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275V7.282c0-.181-.002-.245-.007-.275A2.248 2.248 0 0 0 14.718 7h-1.436c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM13.282 6h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V7.282c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM13 13.282v1.436c0 .181.002.245.007.275.03.005.094.007.275.007h1.436c.181 0 .245-.002.275-.007.005-.03.007-.094.007-.275v-1.436c0-.181-.002-.245-.007-.275a2.248 2.248 0 0 0-.275-.007h-1.436c-.181 0-.245.002-.275.007-.005.03-.007.094-.007.275zM13.282 12h1.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134z" fillRule="evenodd">
                                                    </path>
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
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-product.f54d9f2.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Sản phẩm</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-category.54362e1.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                            <path d="M8 25.5v-2h22v2H8zm0-10h22v2H8v-2zm0-8h22v2H8v-2zM1.6 23.2h2.8V26H1.6v-2.8zm0-8.1h2.8v2.8H1.6v-2.8zm0-8h2.8v2.8H1.6V7.1z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Danh mục của Shop</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-sales.fef6c9b.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28 16.9v12.8H4V16.6c-1-.9-1.7-2.6-1.7-4.1L5.7 2.2h20.6l3.4 10.3c.1 1.8-.4 3.5-1.7 4.4zM5.7 28h20.6v-3.4H5.7V28zm0-5.1h20.6v-5.2c-.3 0-.5.1-.9.1-1.3 0-2.7-.7-3.4-1.7-.7 1-1.6 1.7-3 1.7-1.2 0-2.3-.9-3-1.7-.7.9-1.8 1.7-3 1.7-1.4 0-2.3-.7-3-1.7-.8 1-2.2 1.7-3.5 1.7-.3 0-.5 0-.8-.1v5.2zM25.2 4H6.8l-2.3 6.9h22.9L25.2 4zM4 12.6C4.2 14 5.3 16 6.5 16s2.7 0 2.7-1.7h1.7s0 1.7 2.1 1.7 2.1-1.7 2.1-1.7h1.8S16.8 16 19 16c2.1 0 2.1-1.7 2.1-1.7H23s0 1.7 2.7 1.7c2.5 0 2.5-3.4 2.5-3.4H4z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Đơn Hàng</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-adsportal.f3779a5.png)" }}>
                                                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                            <path d="M23.59 30.5H8.4l-2-9.71-1.22 1.28-4.57-4.54L16 1l.72.75 14.67 15.78-4.57 4.54-1.1-1.16zM10 28.5h12l2.6-11.7 2.28 2.41 1.74-1.73L16 4 3.39 17.47l1.74 1.73 2.43-2.57zM18.22 14H20l-6.22 9H12zM13 14a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6 5a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Kênh Marketing</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-income.83c58c7.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27.8 27.1H8.5c-1 0-1.8-.8-1.8-1.8v-1.8h1.8v.9c0 .5.4.9.9.9H27c.5 0 .9-.4.9-.9V12.2c0-.5-.4-.9-.9-.9h-1v-.9c0-.5-.4-.9-.9-.9h2.6c1 0 1.8.8 1.8 1.8v14c.1 1-.7 1.8-1.7 1.8zm-5.3-5.2H3.2c-1 0-1.8-.8-1.8-1.8v-14c0-1 .8-1.8 1.8-1.8h19.3c1 0 1.8.8 1.8 1.8v14c0 1-.8 1.8-1.8 1.8zm0-15c0-.5-.4-.9-.9-.9H4.1c-.5 0-.9.4-.9.9v12.3c0 .5.4.9.9.9h17.6c.5 0 .9-.4.9-.9V6.9zm-7 8c0 1.1-.8 2.2-2.1 2.4v1.1h-1v-1.1c-1.4-.2-2.2-1.1-2.2-1.1l.8-1.1s.9.9 1.9.9c.6 0 1.1-.4 1.1-1 0-1.4-3.7-1.2-3.7-3.7 0-1.2.9-2.1 2.1-2.3V7.8h1v1.1c1.3.1 1.9.9 1.9.9l-.5 1.2s-.8-.7-1.8-.7c-.7 0-1.1.4-1.1 1-.1 1.3 3.6 1.1 3.6 3.6z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Doanh thu</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-wallet.b00fc46.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M27.4 30H4.6c-1 0-1.8-.8-1.8-1.8V10.7c0-1 .8-1.8 1.8-1.8l21-7c1 0 1.8.8 1.8 1.8V9c1 0 1.8.8 1.8 1.8v17.5c-.1.9-.8 1.7-1.8 1.7zM25.6 4.6c0-.5-.4-.9-.9-.9L10.3 9h15.3V4.6zm1.8 14.9h-3.5v1.8h3.5v-1.8zm0 3.5h-5.3v-5.3h5.3v-6.1c0-.5-.4-.9-.9-.9h-21c-.5 0-.9.4-.9.9v15.8c0 .5.4.9.9.9h21c.5 0 .9-.4.9-.9V23z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Ví Shopee</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-data-center.86a43e9.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30 6.4l-7.7 7.7c-.4.4-1 .4-1.3 0l-5.6-4.9-7.2 7.2c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l7.9-7.9c.4-.4 1-.4 1.3 0l5.6 4.9 6.9-6.9h-1.9c-.5 0-1-.4-1-1 0-.5.4-1 1-1h4.3c.3 0 .6.2.8.4.1.3.3.6.3.9v4.3c0 .5-.4 1-1 1s-1-.4-1-1V6.4zM10.2 27.2h4.3V16.8c0-.5.4-1 1-1 .5 0 1 .4 1 1v10.4h4.3v-6.5c0-.5.4-1 1-1s1 .4 1 1v6.5h4.3v-8.8c0-.5.4-1 1-1s1 .4 1 1v8.8h1c.5 0 1 .4 1 1s-.4 1-1 1H1c-.5 0-1-.4-1-1V4.6c0-.5.4-1 1-1s1 .4 1 1v22.6h6.3v-6.5c0-.5.4-1 1-1s1 .4 1 1v6.5z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="item-name">Phân Tích Bán Hàng</span>
                                            </div>
                                            <div className="category-item">
                                                <div className="item-container">
                                                    <div className="item-icon" style={{ backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/framework/image/bg-settings.43459aa.png)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
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
                                                    <button type="button" className="notification-icon button button--link button--normal">
                                                        <i className="icon">
                                                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1h4zM8.5 0a.5.5 0 0 1 .5.5v.593a5.4 5.4 0 0 1 4.383 4.892l.54 7.015h.577a.5.5 0 1 1 0 1h-13a.5.5 0 1 1 0-1h.577l.54-7.015A5.4 5.4 0 0 1 7 1.093V.5a.5.5 0 0 1 .5-.5h1zM8 2a4.4 4.4 0 0 0-4.386 4.062L3.08 13h9.84l-.534-6.938A4.4 4.4 0 0 0 8 2z" fillRule="evenodd"></path>
                                                            </svg>
                                                        </i>
                                                    </button>
                                                    {/* <sup className="badge-x__sup badge-x__sup--num badge-x__sup--fixed" >
                                                <span>0</span>
                                            </sup> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popper popover__popper popover__popper--light with-arrow headbar-notification-popover" >
                                            <div className="popover__content">
                                                <div >
                                                    <div className="notification-menu">
                                                        <div className="menu-header">
                                                            <div className="menu-header-left">Thông báo đã nhận gần đây</div> <button type="button" disabled="disabled" className="button button--link button--normal disabled">
                                                                <span>Đánh dấu đã đọc tất cả</span>
                                                            </button>
                                                        </div>
                                                        <div id="headerbar-notification-menu-body" className="menu-body">
                                                            <div className="infinite-scroll">
                                                                <div className="infinite-scroll-footer hidden">
                                                                    <div ><div className="loading">
                                                                        <div className="loading-layout">
                                                                            <div className="loading-layout-item">
                                                                                <div className="skeleton container-square skeleton__square"></div>
                                                                                <div className="skeleton container-line skeleton__line">
                                                                                    <div className="skeleton__line-first">
                                                                                    </div>
                                                                                    <div className="skeleton__line-second">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="loading-layout-item">
                                                                                <div className="skeleton container-square skeleton__square">
                                                                                </div>
                                                                                <div className="skeleton container-line skeleton__line">
                                                                                    <div className="skeleton__line-first">
                                                                                    </div>
                                                                                    <div className="skeleton__line-second">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="loading-layout-item">
                                                                                <div className="skeleton container-square skeleton__square">

                                                                                </div>
                                                                                <div className="skeleton container-line skeleton__line">
                                                                                    <div className="skeleton__line-first"></div>
                                                                                    <div className="skeleton__line-second"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="loading-layout-item">
                                                                                <div className="skeleton container-square skeleton__square">
                                                                                </div>
                                                                                <div className="skeleton container-line skeleton__line">
                                                                                    <div className="skeleton__line-first"></div>
                                                                                    <div className="skeleton__line-second"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="loading-layout-item">
                                                                                <div className="skeleton container-square skeleton__square">
                                                                                </div>
                                                                                <div className="skeleton container-line skeleton__line">
                                                                                    <div className="skeleton__line-first">
                                                                                    </div>
                                                                                    <div className="skeleton__line-second">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="menu-footer">Xem tất cả thông báo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ("")
            }
        </div>
    );
}

export default Header;