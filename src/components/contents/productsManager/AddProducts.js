import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategory, listSubCategory } from '../../../actions/categoryAction';
import { addProducts } from '../../../actions/productAction';
function AddProducts(props) {
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [productThumbnail, setProductThumbnail] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [discount, setdiscount] = useState("");
    const [subProductId, setSubProductId] = useState("");
    const [urlImage, setUrlImage] = useState(null);

    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.categoryList);
    const { loading, error, categorys } = categoryList;

    const subCategoryList = useSelector((state) => state.subCategoryList);
    const { loading1, err, subCategories } = subCategoryList;

    useEffect(() => {
        dispatch(listCategory());
    }, [dispatch]);

    const handleChangeImage = (event) => {
        if (event.target.files[0]) {
            setUrlImage(event.target.files[0]);
        }
        const a = URL.createObjectURL(event.target.files[0]);
        setProductThumbnail(a);
    }
    const product = {
        postTitle: postTitle,
        postDescription: postDescription,
        product: {
            productThumbnail: productThumbnail,
            productPrice: productPrice,
            productName: productName,
            quantity: quantity,
            discount: discount,
            subCategory: {
                id: subProductId
            }
        }
    }
    const postproduct = () => {
        dispatch(addProducts(product));
        console.log(product);
    }
    return (
        <div className="page">
            <div className="product">
                <div className="product-category">
                    <div className="old-wrapper content">
                        <div className="header">
                            <h2 className="title">
                                Thêm 1 sản phẩm mới
                            </h2>
                            <p className="desc">
                                Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.
                            </p>
                        </div>
                        <div className="category-selector category-selector">
                            <div className="selector">
                                <div className="shopee-input search-input">
                                    <div className="shopee-input__inner shopee-input__inner--normal">
                                        <div className="shopee-input__prefix">
                                            <i className="shopee-input__prefix-icon shopee-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                    <path d="M31.7 31.7c-.4.4-1 .4-1.3 0l-8.9-8.9c-2.3 2-5.2 3.2-8.5 3.2-7.2 0-13-5.8-13-13S5.8 0 13 0s13 5.8 13 13c0 3.2-1.2 6.2-3.2 
                                                    8.5l8.9 8.9c.4.3.4.9 0 1.3zM24 13c0-6.1-4.9-11-11-11S2 6.9 2 13s4.9 11 11 11 11-4.9 11-11z" fillRule="evenodd" clipRule="evenodd"></path>
                                                </svg>
                                            </i>
                                        </div>
                                        <input type="text" placeholder="Tên Ngành Hàng" resize="vertical" rows="2" minrows="2" restrictiontype="input" max="Infinity" min="-Infinity" className="shopee-input__input" />
                                    </div>
                                </div>
                                <div className="category-wrap">
                                    <div className="category-list" style={{ width: "1500px" }}>
                                        <ul className="scroll-item" >
                                            {
                                                loading ? ("") :
                                                    error ? ("") : (
                                                        categorys.map((item) => (
                                                            <li key={item.id} className="category-item" onClick={() => dispatch(listSubCategory(item.id))}>
                                                                <p className="text-overflow" onClick={() => setCategory(item.categoryName)}>{item.categoryName}</p>
                                                                <i className="icon-next shopee-icon" >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                                    </svg>
                                                                </i>
                                                            </li>
                                                        ))
                                                    )
                                            }
                                        </ul>
                                        <ul className="scroll-item" >
                                            {
                                                loading1 ? ("") :
                                                    err ? ("") : (
                                                        subCategories.map((item) => (
                                                            <li key={item.id} className="category-item category-item" onClick={() => setSubCategory(item.subCategoryName)}>
                                                                <p className="text-overflow" onClick={() => setSubProductId(item.id)}>
                                                                    {item.subCategoryName}
                                                                </p>
                                                                <i className="icon-next shopee-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                                    </svg>
                                                                </i>
                                                            </li>
                                                        ))
                                                    )
                                            }
                                        </ul>
                                        <ul className="scroll-item" >
                                        </ul>
                                        <ul className="scroll-item" >
                                        </ul>
                                        <ul className="scroll-item" >
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="category-selected">
                                <span className="label">Đã chọn :</span>
                                {
                                    category ? (
                                        <span>
                                            <span className="cat-selected-item">
                                                {category}
                                                <span>&gt;</span>
                                            </span>
                                            <span className="cat-selected-item">
                                                {subCategory}
                                            </span>
                                        </span>
                                    ) : (
                                        <span className="no-select">Chưa chọn ngành hàng</span>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-edit">
                <div className="product-edit__section">
                    <h2 >Thông tin cơ bản</h2>
                    <div className="product-basic-info">
                        <div className="container">
                            <div className="grid edit-row image-offset">
                                <div className="edit-label edit-title">
                                    <span >Hình ảnh sản phẩm</span>
                                </div>
                                <div className="edit-main shopee-image-manager">
                                    <div className="container">
                                        <div className="shopee-image-manager__item ignore-item cover-item">
                                            <div className={productThumbnail === "" ? "shopee-image-manager__content" : "shopee-image-manager__content content-fill"}>
                                                {
                                                    productThumbnail === "" ? (
                                                        <div className="shopee-image-manager__upload">
                                                            <div className="shopee-file-upload" accept="image/*">
                                                                <div className="shopee-upload" aspect="1">
                                                                    <div className="shopee-upload-wrapper shopee-upload-dragger">
                                                                        <input type="file" onChange={handleChangeImage} name="file" aspect="1.1" className="shopee-upload__input" />
                                                                        <div className="shopee-image-manager__upload__content">
                                                                            <i className="shopee-icon">
                                                                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.387 5.807a.387.387 0 1 0-.774 0v5.806H5.806a.387.387 0 
                                                                                    1 0 0 .774h5.807v5.807a.387.387 0 1 0 .774 0v-5.807h5.807a.387.387 0 1 0 0-.774h-5.807V5.807z"></path>
                                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 
                                                                                    12zm0-.774c6.2 0 11.226-5.026 11.226-11.226C23.226 5.8 18.2.774 12 .774 5.8.774.774 5.8.774 12 .774 18.2 5.8 23.226 12 23.226z">
                                                                                    </path>
                                                                                </svg>
                                                                            </i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <img className="shopee-image-manager__image" src={productThumbnail} />
                                                            <div className="shopee-image-manager__tools">
                                                                <span className="shopee-image-manager__icon shopee-image-manager__icon--delete">
                                                                    <i className="shopee-icon">
                                                                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                                            <g fillRule="nonzero">
                                                                                <path d="M14.516 3.016h-4v-1a.998.998 0 0 0-.703-.955.99.99 0 0 0-.297-.045h-3a.998.998 0 0 0-.955.703.99.99 
                                                                            0 0 0-.045.297v1h-4a.5.5 0 1 0 0 1h1v10a.998.998 0 0 0 .703.955.99.99 0 0 0 .297.045h9a.998.998 0 0 0 .955-.703.99.99 
                                                                            0 0 0 .045-.297v-10h1a.5.5 0 1 0 0-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path>
                                                                                <path d="M5.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5zM8.016 12.016a.5.5 0 0 0 .5-.5v-5a.5.5 0 
                                                                            1 0-1 0v5a.5.5 0 0 0 .5.5zM10.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5z"></path>
                                                                            </g>
                                                                        </svg>
                                                                    </i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                <div className="explain-text">
                                                    <div className="mandatory">
                                                        <span className="mandatory-icon">*</span>
                                                    </div>
                                                 Ảnh bìa
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid edit-row">
                                <div className="edit-label edit-title">
                                    <div className="mandatory">
                                        <span className="mandatory-icon">*</span>
                                    </div>
                                    <span >Tiêu đề</span>
                                </div>
                                <div className="edit-input edit-main">
                                    <div className="product-edit-form-item" size="large">
                                        <div className="product-edit-form-item-content">
                                            <div className="shopee-input" >
                                                <div className="shopee-input__inner shopee-input__inner--large">
                                                    <input type="text"
                                                        placeholder="Nhập vào"
                                                        size="large"
                                                        resize="none"
                                                        rows="2"
                                                        minrows="2"
                                                        maxLength="Infinity"
                                                        restrictiontype="input"
                                                        max="Infinity"
                                                        min="-Infinity"
                                                        className="shopee-input__input"
                                                        value={postTitle}
                                                        onChange={(e) => setPostTitle(e.target.value)} />
                                                    <div className="shopee-input__suffix">
                                                        <span className="shopee-input__suffix-split"></span>
                                                    12/120
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid edit-row">
                                <div className="edit-label edit-title">
                                    <div className="mandatory">
                                        <span className="mandatory-icon">*</span>
                                    </div>
                                    <span >Tên sản phẩm</span>
                                </div>
                                <div className="edit-input edit-main">
                                    <div className="product-edit-form-item" size="large">
                                        <div className="product-edit-form-item-content">
                                            <div className="shopee-input" >
                                                <div className="shopee-input__inner shopee-input__inner--large">
                                                    <input
                                                        type="text"
                                                        placeholder="Nhập vào"
                                                        size="large"
                                                        resize="none"
                                                        rows="2"
                                                        minrows="2"
                                                        maxLength="Infinity"
                                                        restrictiontype="input"
                                                        max="Infinity"
                                                        min="-Infinity"
                                                        className="shopee-input__input"
                                                        value={productName}
                                                        onChange={(e) => setProductName(e.target.value)} />
                                                    <div className="shopee-input__suffix">
                                                        <span className="shopee-input__suffix-split"></span>
                                                    12/120
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid edit-row description-wrap">
                                <div className="edit-label edit-title">
                                    <div className="mandatory">
                                        <span className="mandatory-icon">*</span>
                                    </div>
                                    <span >Mô tả sản phẩm</span>
                                </div>
                                <div className="edit-input edit-main">
                                    <div className="description product-edit-form-item" autosize="" maxrows="26" minrows="9">
                                        <div className="product-edit-form-item-content">
                                            <div className="shopee-input shopee-input__area" >
                                                <textarea
                                                    type="textarea"
                                                    resize="none"
                                                    rows="2"
                                                    minrows="9"
                                                    maxrows="26"
                                                    autosize="true"
                                                    maxLength="Infinity"
                                                    restrictiontype="input"
                                                    max="Infinity"
                                                    min="-Infinity"
                                                    className="shopee-input__inner shopee-input__inner--normal"
                                                    style={{ resize: "none", minHeight: "210px", height: "210px" }}
                                                    value={postDescription}
                                                    onChange={(e) => setPostDescription(e.target.value)}>
                                                </textarea>
                                            </div>
                                            <div className="text-area-label">
                                                <span className="text-area-label-pre">0</span>
                                            /3000
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid edit-row">
                                <div className="edit-label edit-title">
                                    <div className="mandatory">
                                        <span className="mandatory-icon">*</span>
                                    </div>
                                    <span >Danh mục</span>
                                </div>
                                <div className="edit-input edit-main">
                                    <div className="category-input" edit-text="Sửa >>">
                                        <div className="category-name has-btn">
                                            <span className="cat-selected-wrapper">
                                                <span className="cat-selected-item" >{category}</span>
                                                <span className="spacer-point">&gt;</span>
                                            </span>
                                            <span className="cat-selected-wrapper">
                                                <span className="cat-selected-item" >{subCategory}</span>
                                                <span className="spacer-point">&gt;</span>
                                            </span>
                                        </div>
                                        <button type="button" className="edit-btn shopee-button shopee-button--link shopee-button--normal">
                                            <i className="shopee-icon">
                                                <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                    <path d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 
                                                0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 
                                                242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z" data-name="Layer 1"></path>
                                                </svg>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="grid edit-row">
                                    <div className="edit-label edit-title">
                                        <div className="mandatory">
                                            <span className="mandatory-icon">*</span>
                                        </div>
                                        <span >Giá</span>
                                    </div>
                                    <div className="edit-input edit-text">
                                        <div className="product-edit-form-item error">
                                            <div className="product-edit-form-item-content">
                                                <div className="shopee-input product-edit-input" >
                                                    <div className="shopee-input__inner shopee-input__inner--large">
                                                        <div className="shopee-input__prefix">
                                                            ₫
                                                        <span className="shopee-input__prefix-split"></span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Nhập vào"
                                                            size="large"
                                                            resize="vertical"
                                                            rows="2"
                                                            minrows="2"
                                                            restrictiontype="value"
                                                            max="Infinity"
                                                            min="-Infinity"
                                                            isround="true"
                                                            className="shopee-input__input"
                                                            value={productPrice}
                                                            onChange={(e) => setProductPrice(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid edit-row">
                                    <div className="edit-label edit-title">
                                        <div className="mandatory">
                                            <span className="mandatory-icon">*</span>
                                        </div>
                                        <span >Số lượng</span>
                                    </div>
                                    <div className="edit-input edit-text">
                                        <div className="product-edit-form-item error">
                                            <div className="product-edit-form-item-content">
                                                <div className="shopee-input product-edit-input" >
                                                    <div className="shopee-input__inner shopee-input__inner--large">
                                                        <div className="shopee-input__prefix">
                                                            c
                                                        <span className="shopee-input__prefix-split"></span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Nhập vào"
                                                            size="large"
                                                            resize="vertical"
                                                            rows="2"
                                                            minrows="2"
                                                            restrictiontype="value"
                                                            max="Infinity"
                                                            min="-Infinity"
                                                            isround="true"
                                                            className="shopee-input__input"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid edit-row">
                                    <div className="edit-label edit-title">
                                        <div className="mandatory">
                                            <span className="mandatory-icon">*</span>
                                        </div>
                                        <span >Giảm giá</span>
                                    </div>
                                    <div className="edit-input edit-text">
                                        <div className="product-edit-form-item error">
                                            <div className="product-edit-form-item-content">
                                                <div className="shopee-input product-edit-input" >
                                                    <div className="shopee-input__inner shopee-input__inner--large">
                                                        <div className="shopee-input__prefix">
                                                            %
                                                        <span className="shopee-input__prefix-split"></span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Nhập vào"
                                                            size="large"
                                                            resize="vertical"
                                                            rows="2"
                                                            minrows="2"
                                                            restrictiontype="value"
                                                            max="Infinity"
                                                            min="-Infinity"
                                                            isround="true"
                                                            className="shopee-input__input"
                                                            value={discount}
                                                            onChange={(e) => setdiscount(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button"
                            className="shopee-button shopee-button--primary shopee-button--large button-right"
                            onClick={postproduct}>
                            <span>
                                Thêm
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProducts;