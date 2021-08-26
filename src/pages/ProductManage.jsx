import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { listProductsAction } from "../actions/productAction";
import LoadingBox from "../components/boxInfor/LoadingBox";
import ListProduct from "../components/contents/productsManager/ListProducts";
import {
  PRODUCT_ADD_RESET,
  PRODUCT_DELETE_RESET,
} from "../constants/productContant";
function ProductManage(props) {
  const [traslate, setTranslate] = useState(0);
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const listProducts = useSelector((state) => state.listProducts);

  const { loading, error, products } = listProducts;

  const listsProducts = products;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_ADD_RESET });
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProductsAction(""));
  }, [dispatch, history, createdProduct, successDelete, successCreate]);

  const dispatchListAll = () => {
    dispatch(listProductsAction(""));
  };
  const dispatchListActive = () => {
    dispatch(listProductsAction("/active"));
  };
  const dispatchListEmpty = () => {
    dispatch(listProductsAction("/empty"));
  };
  const dispatchListDisable = () => {
    dispatch(listProductsAction("/disable"));
  };
  return (
    <div className="product-manager">
      <div className="product-list">
        <div className="product-list-main">
          <div className="fixed-top-card">
            <div className="fixed-container">
              <div className="portal-panel">
                <div className="tabs shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
                  <div className="shopee-tabs__nav">
                    <div className="shopee-tabs__nav-warp">
                      <div
                        className="shopee-tabs__nav-tabs"
                        style={{ transform: "translateX(0px)" }}
                      >
                        <div
                          className={
                            active === 0
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(0);
                            setActive(0);
                            dispatchListAll();
                          }}
                        >
                          <div className="tabs__tab">Tất cả</div>
                        </div>
                        <div
                          className={
                            active === 1
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(100);
                            setActive(1);
                            dispatchListActive();
                          }}
                        >
                          <div className="tabs__tab">Đang hoạt động</div>
                        </div>
                        <div
                          className={
                            active === 2
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(215);
                            setActive(2);
                            dispatchListEmpty();
                          }}
                        >
                          <div className="tabs__tab">Hết hàng</div>
                        </div>
                        <div
                          className={
                            active === 3
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(290);
                            setActive(3);
                            dispatchListDisable();
                          }}
                        >
                          <div className="tabs__tab">Đã ẩn</div>
                        </div>
                      </div>
                      <div
                        className="shopee-tabs__ink-bar"
                        style={{
                          width: "71px",
                          transform: `translateX(${traslate}px)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-list-main">
              <div className="list-panel">
                {loading ? (
                  <div>
                    <LoadingBox />
                    <ListProduct products={[]} opacity={0.5} />
                  </div>
                ) : error ? (
                  ""
                ) : (
                  <div>
                    <ListProduct products={listsProducts} opacity={1} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManage;
