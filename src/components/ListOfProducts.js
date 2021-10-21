import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  });

  console.log("Products :", products);
  return (
    <div>
      <div
        className="product-contaier"
        onClick={() => {
          props.setproductSelected(imdbID);
        }}
      >
        <img className="product-poster" src={Poster} alt={Title} />
        <div className="product-name">{Title}</div>
        <div className="product-info">
          <span className="info">Year:{Year}</span>
          <span className="info">Type:{Type}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
