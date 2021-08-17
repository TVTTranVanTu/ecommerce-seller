import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAction } from "../actions/productAction";
import ListProduct from "../components/contents/productsManager/ListProducts";
function ProductManage(props) {
  const [traslate, setTranslate] = useState(0);
  const [active, setActive] = useState(1);

  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.listProducts);
  const { loading, error, products } = listProducts;

  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);

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
                            active === 1
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(0);
                            setActive(1);
                          }}
                        >
                          <div className="tabs__tab">Tất cả</div>
                        </div>
                        <div
                          className={
                            active === 0
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(81);
                            setActive(0);
                          }}
                        >
                          <div className="tabs__tab">Hết hàng</div>
                        </div>
                        <div
                          className={
                            active === 2
                              ? "shopee-tabs__nav-tab  active"
                              : "shopee-tabs__nav-tab "
                          }
                          onClick={() => {
                            setTranslate(162);
                            setActive(2);
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
                  ""
                ) : error ? (
                  ""
                ) : (
                  <div>
                    <ListProduct products={products} />
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
