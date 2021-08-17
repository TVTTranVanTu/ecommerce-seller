import React from "react";

function Product(props) {
  const { products } = props;

  return (
    <div>
      {!products ? (
        <div className="product-no-result">
          <span className="sprites-product-list-no-product"></span>
          <div className="text">Không tìm thấy sản phẩm</div>
        </div>
      ) : (
        <div>
          {products &&
            products.map((item) => (
              <div className="product-result" key={item.productDto.id}>
                <div className="product-name">
                  <a
                    href={`http://ecommerce.nh7.surge.sh/${item.productDto.productName
                      .replace(
                        /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                        ""
                      )
                      .replace(/\s/gi, "-")}.${item.productDto.id}`}
                  >
                    {item.productDto.productName}
                  </a>
                </div>
                <div className="product-info">
                  <div className="product-price">
                    {item.productDto.productPrice}
                  </div>
                  <div className="product-discount">
                    {item.productDto.discount}
                  </div>
                  <div className="product-quantity">
                    {item.productDto.quantity}
                  </div>
                  <div className="product-sold">{item.soldQuantity}</div>
                </div>
                <div className="edit-product">
                  <button
                    type="button"
                    className="edit-btn shopee-button shopee-button--link shopee-button--normal"
                  >
                    <i className="shopee-icon">
                      <svg
                        data-name="图层 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 
                                0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 
                                242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z"
                          data-name="Layer 1"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Product;
