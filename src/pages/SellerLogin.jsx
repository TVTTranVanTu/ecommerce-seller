import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { siginToFacebook, siginToGoogle, signin } from "../actions/UserAction";
import MessageBox from "../components/boxInfor/MessageBox";
import { validPassword, validUserName } from "../regex";
function SellerLogin(props) {
  const history = useHistory();

  function signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: "Google",
    };

    dispatch(siginToGoogle(googleresponse));
  }

  function signupFB(res) {
    const facebookresponse = {
      Name: res.name,
      email: res.email,
      token: res.accessToken,
      Image: res.picture.data.url,
      ProviderId: "Facebook",
    };
    dispatch(siginToFacebook(facebookresponse));
  }

  const dispatch = useDispatch();

  const userSigninGG = useSelector((state) => state.userSigninGG);
  const { data } = userSigninGG;

  const userSigninFB = useSelector((state) => state.userSigninFB);
  const { datafb } = userSigninFB;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  let submit = true;
  const validateFormLogin = () => {
    if (!validUserName.test(userName)) {
      setErrorUserName(true);
      submit = false;
    }
    if (!validPassword.test(password)) {
      setErrorPassword(true);
      submit = false;
    }
  };

  const submidHandler = (e) => {
    e.preventDefault();
    validateFormLogin();
    submit && dispatch(signin(userName, password));
  };

  const responseGoogle = (response) => {
    if (response) {
      signup(response);
    }
  };

  const responseFacebook = (response) => {
    if (response) {
      signupFB(response);
    }
  };
  useEffect(() => {
    if (data) {
      if (data.username === null) {
        history.push("/form-info");
      } else {
        dispatch(signin(data.username, data.password));
        history.push("/");
      }
    }
    if (datafb) {
      if (datafb.username === null) {
        history.push(`/form-info`);
      } else {
        dispatch(signin(datafb.username, datafb.password));
      }
    }
  }, [dispatch, userInfo, data, datafb]);
  useEffect(() => {
    submit = true;
  }, [errorUserName, errorPassword]);
  return (
    <div className="seller-login">
      <div className="container">
        <div className="infor">
          <div className="text">
            <div className="title">Bán hàng chuyên nghiệp</div>
            <div className="subtitle">
              Quản lý shop của bạn một cách hiệu quả hơn trên BK-ecommerce -
              Kênh Người bán
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="center"></div>
        <div className="form-login">
          <div className="signin-panel">
            <div className="signin-seller">
              <div className="signin-form">
                <div className="signin-title">Đăng nhập vào kênh người bán</div>
                {loading && ""}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <form className="form" onSubmit={submidHandler}>
                  <div className="mr__bt">
                    <input
                      className="ant-input form-control"
                      type="text"
                      id="username"
                      placeholder="Nhập vào tên tài khoản ..."
                      required
                      onChange={(e) => {
                        setUserName(e.target.value);
                        setErrorUserName(false);
                      }}
                    ></input>
                    {errorUserName && (
                      <p className="invalid">Tên đăng nhập không hợp lệ!</p>
                    )}
                  </div>
                  <div className="mr__bt">
                    <input
                      className="ant-input form-control"
                      type="password"
                      id="password"
                      placeholder="Nhập vào mật khẩu ..."
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorPassword(false);
                      }}
                    ></input>
                    {errorPassword && (
                      <p className="invalid">Mật khẩu không hợp lệ!</p>
                    )}
                  </div>
                  <button
                    className="mr__bt ant-btn ant-btn-primary btn btn_orange w100"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                  <div className="mr__bt">
                    <div className="formLogin__or">
                      <span>Hoặc</span>
                    </div>
                    <div className="_1ix216">
                      <FacebookLogin
                        cssClass="dJsOUU _1A307B _1tEaLw _1A307B _2ph_NL"
                        appId="2981644228786801"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        textButton="Facebook"
                        icon="fa-facebook"
                      ></FacebookLogin>
                      <GoogleLogin
                        className="dJsOUU _1A307B _1tEaLw _1A307B _1SPkQc"
                        clientId="662863314372-2gu6a9q5567fqgmb1hq0maruj63o7uvn.apps.googleusercontent.com"
                        buttonText="Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                      ></GoogleLogin>
                      <button className="dJsOUU _1A307B _1tEaLw _1A307B nvH7Oz">
                        <div className="_1b1OLX">
                          <div className="_1JEYOo social-white-background social-white-apple-png"></div>
                        </div>
                        <div className="_1iDCwS">Apple</div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerLogin;
