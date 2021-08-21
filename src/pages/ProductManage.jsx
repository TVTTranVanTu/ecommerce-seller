import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductsAction,
  listProductsActiveAction,
  listProductsDisableAction,
  listProductsEmptyAction,
} from "../actions/productAction";
import LoadingBox from "../components/boxInfor/LoadingBox";
import ListProduct from "../components/contents/productsManager/ListProducts";
import {
  PRODUCT_ADD_RESET,
  PRODUCT_DELETE_RESET,
} from "../constants/productContant";
function ProductManage(props) {
  const [traslate, setTranslate] = useState(0);
  const [active, setActive] = useState(0);
  const [param, setParam] = useState("");
  const dispatch = useDispatch();

  const listProducts = useSelector((state) => state.listProducts);
  const listProductsActive = useSelector((state) => state.listProductsActive);
  const listProductsEmpty = useSelector((state) => state.listProductsEmpty);
  const listProductsDisable = useSelector((state) => state.listProductsDisable);

  const { loading, error, products } =
    active === 0
      ? listProducts
      : active === 1
      ? listProductsActive
      : active === 2
      ? listProductsEmpty
      : active === 3
      ? listProductsDisable
      : listProducts;

  const listsProducts = products;
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  console.log(successCreate);

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
    dispatch(listProductsAction(param));
    dispatch(listProductsActiveAction());
    dispatch(listProductsEmptyAction());
    dispatch(listProductsDisableAction());
  }, [dispatch, successDelete, successCreate, createdProduct]);

  const dispatchListAll = () => {
    dispatch(listProductsAction());
  };
  const dispatchListActive = () => {
    dispatch(listProductsActiveAction());
  };
  const dispatchListEmpty = () => {
    dispatch(listProductsEmptyAction());
  };
  const dispatchListDisable = () => {
    dispatch(listProductsDisableAction());
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
                          }}
                        >
                          <div className="tabs__tab" onClick={dispatchListAll}>
                            Tất cả
                          </div>
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
                          }}
                        >
                          <div
                            className="tabs__tab"
                            onClick={dispatchListActive}
                          >
                            Đang hoạt động
                          </div>
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
                          }}
                        >
                          <div
                            className="tabs__tab"
                            onClick={dispatchListEmpty}
                          >
                            Hết hàng
                          </div>
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
                          }}
                        >
                          <div
                            className="tabs__tab"
                            onClick={dispatchListDisable}
                          >
                            Đã ẩn
                          </div>
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
