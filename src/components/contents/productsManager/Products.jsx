import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAction } from "../../../actions/productAction";
import ListProduct from "./ListProducts";

function Products(props) {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.listProducts);
  const { loading, error, products } = listProducts;
  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);

  return (
    <div>
      {
          loading?(""):
          error?(""):(
            <ListProduct products={products}/>
          )
      }
    </div>
  );
}

export default Products;
