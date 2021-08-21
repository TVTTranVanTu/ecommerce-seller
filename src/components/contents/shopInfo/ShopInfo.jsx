import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Avatar from "../../../assets/image/avatar.jpg";

import { updateInforAction } from "../../../actions/shopAction";
import { storage } from "../../../firebase/firebase";
import { validPhoneNumber, validUserName } from "../../../regex";
import { useEffect } from "react";

function ShopInfo(props) {
  const shopInf = props.shopInf;
  const history = useHistory();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(shopInf.logo);
  const [shopname, setShopname] = useState(shopInf.name);
  const [phonenumber, setPhonenumber] = useState(shopInf.phoneNumber);
  const [address, setAddress] = useState(shopInf.address);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [provinces, setProvices] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selection, setSelection] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState(false);
  const [errShopName, setErrShopName] = useState(false);
  let submit = true;
  const validate = () => {
    if (!validPhoneNumber.test(phonenumber)) {
      setErrPhoneNumber(true);
      submit = false;
    }
    if (!validUserName.test(shopname)) {
      setErrShopName(true);
      submit = false;
    }
  };

  const redict = () => {
    history.push("/dashboard");
  };
  const changeProvinces = () => {
    axios
      .get("https://provinces.open-api.vn/api/?depth=3")
      .then(function (response) {
        setProvices(response.data);
        setSelection("provinces");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const avatar = event.target.files[0];
      setAvatar(avatar);
      const uploadTask = storage.ref(`images/${avatar.name}`).put(avatar);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(avatar.name)
            .getDownloadURL()
            .then((url) => {
              setAvatar(url);
            });
        }
      );
    }
  };

  const updateShop = () => {
    const postShopInfor = {
      logo: avatar,
      name: shopname,
      phoneNumber: phonenumber,
      address: address,
    };
    if (avatar && shopname && phonenumber && address) {
      validate();
      if (submit) {
        dispatch(updateInforAction(postShopInfor));
        redict();
      }
    }
  };
  useEffect(() => {
    submit = true;
  }, [errShopName, errPhoneNumber]);
  return (
    <div className="shop-profile">
      <div className="header shop-profile-header">
        <div className="caption">
          <div className="title">Hồ Sơ Shop</div>
          <div className="subtitle">
            Tạo shop, xem tình trạng Shop và cập nhật hồ sơ Shop của bạn
          </div>
        </div>
      </div>
      <div className="shop-profile-body">
        <div className="shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
          <div className="shopee-tabs__nav">
            <div className="shopee-tabs__nav-warp">
              <div
                className="shopee-tabs__nav-tabs"
                style={{ transform: "translateX(0px)" }}
              >
                <div
                  className="shopee-tabs__nav-tab active"
                  style={{ wordSpacing: "normal" }}
                >
                  Thông tin cơ bản
                </div>
              </div>
              <div
                className="shopee-tabs__ink-bar"
                style={{ width: "138px", transform: "translateX(0px)" }}
              ></div>
            </div>
          </div>
          <div className="shopee-tabs__content">
            <div className="shopee-tabs-tabpane"></div>
          </div>
        </div>
        <div className="shop-profile-tab-wrapper">
          <div className="shop-profile-inf">
            <div className="shope-profile-content">
              <div className="shop-avatar">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url(${avatar ? avatar : Avatar})`,
                  }}
                >
                  <div className="avatar-edit action">
                    <input
                      type="file"
                      onChange={handleChangeImage}
                      name="file"
                      aspect="1.1"
                      className="shopee-upload__input"
                    />
                    Sửa
                  </div>
                </div>
                <div className="avatar-title">Hình đại diện</div>
              </div>
              <div className="basic-info-list">
                <div className="form-section">
                  <div className="form-title">Tên Shop</div>
                  <form className="shopee-form form-content shopee-form--label-right">
                    <label>
                      <input
                        type="text"
                        name="profile-nickname"
                        style={{ position: "absolute", opacity: "0" }}
                      />
                    </label>
                    <div className="shopee-form-item">
                      <label
                        htmlFor="name"
                        className="shopee-form-item__label empty"
                      ></label>
                      <div className="shopee-form-item__control">
                        <div className="shopee-form-item__content">
                          <div className="shopee-input shopee-name-input">
                            <div className="shopee-input__inner shopee-input__inner--normal">
                              <input
                                type="text"
                                placeholder={
                                  shopname ? shopname : "Nhập vào tên shop"
                                }
                                name="profile-nickname"
                                resize="vertical"
                                rows="2"
                                minrows="2"
                                maxLength="30"
                                restrictiontype="input"
                                showwordlimit="true"
                                max="Infinity"
                                min="-Infinity"
                                value={shopname}
                                onChange={(e) => setShopname(e.target.value)}
                                className="shopee-input__input"
                              />
                              <div className="shopee-input__suffix">
                                <span className="shopee-input__count">
                                  {shopname.split("").length}/30
                                </span>
                              </div>
                            </div>
                            {errShopName === true ? (
                              <p className="invalid">Shop name is invalid</p>
                            ) : (
                              <p className="valid">Shop name is valid</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="form-section">
                  <div className="form-title">Số điện thoại</div>
                  <form className="shopee-form form-content shopee-form--label-right">
                    <label>
                      <input
                        type="text"
                        name="profile-nickname"
                        style={{ position: "absolute", opacity: "0" }}
                      />
                    </label>
                    <div className="shopee-form-item">
                      <label
                        htmlFor="name"
                        className="shopee-form-item__label empty"
                      ></label>
                      <div className="shopee-form-item__control">
                        <div className="shopee-form-item__content">
                          <div className="shopee-input shopee-name-input">
                            <div className="shopee-input__inner shopee-input__inner--normal">
                              <input
                                type="text"
                                placeholder={
                                  phonenumber
                                    ? phonenumber
                                    : "Nhập vào số điện thoại"
                                }
                                name="profile-nickname"
                                resize="vertical"
                                rows="2"
                                minrows="2"
                                maxLength="10"
                                restrictiontype="input"
                                showwordlimit="true"
                                max="Infinity"
                                min="-Infinity"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                                className="shopee-input__input"
                              />
                              <div className="shopee-input__suffix">
                                <span className="shopee-input__count">
                                  {phonenumber.split("").length}/10
                                </span>
                              </div>
                            </div>
                            {errPhoneNumber === true ? (
                              <p className="invalid">Phone number is invalid</p>
                            ) : (
                              <p className="valid">Phone number is valid</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="form-section">
                  <div className="form-title">Địa chỉ</div>
                  <form className="shopee-form form-content shopee-form--label-right">
                    <label>
                      <input
                        type="text"
                        name="profile-nickname"
                        style={{ position: "absolute", opacity: "0" }}
                      />
                    </label>
                    <div className="shopee-form-item">
                      <label
                        htmlFor="name"
                        className="shopee-form-item__label empty"
                      ></label>
                      <div className="shopee-form-item__control">
                        <div className="shopee-form-item__content">
                          <div className="shopee-input shopee-name-input">
                            <div className="_2SECXb _12P62Q">
                              <input
                                placeholder={
                                  address
                                    ? address
                                    : "Tỉnh/Thành phố, Quận/Huyện, Phường/xã"
                                }
                                disabled=""
                              />
                            </div>
                            <div className="box-address">
                              <div className="shopee-input__inner shopee-input__inner--normal">
                                <div className="address">
                                  <div
                                    className="provinces"
                                    onClick={changeProvinces}
                                  >
                                    Tỉnh
                                    <i
                                      className="sidebar-menu-item-collapse icon"
                                      style={{
                                        transform: "rotate(-180deg)",
                                        width: "13px",
                                        height: "13px",
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                                      </svg>
                                    </i>
                                  </div>
                                  <div className="district">
                                    Quận/Huyện
                                    <i
                                      className="sidebar-menu-item-collapse icon"
                                      style={{
                                        transform: "rotate(-180deg)",
                                        width: "13px",
                                        height: "13px",
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                                      </svg>
                                    </i>
                                  </div>
                                  <div className="wards">
                                    Xã/Phường
                                    <i
                                      className="sidebar-menu-item-collapse icon"
                                      style={{
                                        transform: "rotate(-180deg)",
                                        width: "13px",
                                        height: "13px",
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
                                      </svg>
                                    </i>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="list-address"
                                style={{
                                  border: `${
                                    provinces || districts || ward
                                      ? "1px solid #e5e5e5"
                                      : "none"
                                  } `,
                                  borderTop: "none",
                                }}
                              >
                                {selection === "provinces" ? (
                                  provinces &&
                                  provinces.map((item, index) => (
                                    <div
                                      className="address-item"
                                      key={index}
                                      onClick={() => {
                                        setProvince(item.name);
                                        setDistricts(item.districts);
                                        setSelection("districts");
                                      }}
                                    >
                                      {item.name}
                                    </div>
                                  ))
                                ) : selection === "districts" ? (
                                  districts &&
                                  districts.map((item, index) => (
                                    <div
                                      className="address-item"
                                      key={index}
                                      onClick={() => {
                                        setDistrict(item.name);
                                        setWards(item.wards);
                                        setSelection("wards");
                                      }}
                                    >
                                      {item.name}
                                    </div>
                                  ))
                                ) : selection === "wards" ? (
                                  wards &&
                                  wards.map((item, index) => (
                                    <div
                                      className="address-item"
                                      key={index}
                                      onClick={() => {
                                        setWard(item.name);
                                        setAddress(
                                          `${province},  ${district},  ${item.name}`
                                        );
                                        setSelection("");
                                      }}
                                    >
                                      {item.name}
                                    </div>
                                  ))
                                ) : (
                                  <div className="address-none"></div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  type="button"
                  onClick={updateShop}
                  className="save-button shopee-button shopee-button--primary shopee-button--normal"
                >
                  <span>Lưu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopInfo;
