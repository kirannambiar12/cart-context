import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuantityEditor from "./QuantityEditor";
import currencyFormatter from "currency-formatter";

const Detail = () => {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={product.imgUrl} alt="" />
        </div>
        <div className="col-6">
          <h1>{product.title}</h1>
          <p>{currencyFormatter.format(product.price, { code: "INR" })}</p>
          <div className="d-flex justify-content-center">
            <div
              onClick={quantity > 1 && (() => setQuantity(quantity - 1))}
              className="border p-3"
            >
              <h5>-</h5>
            </div>
            <div className="border px-4 py-3">
              <h5>{quantity}</h5>
            </div>
            <div
              onClick={() => setQuantity(quantity + 1)}
              className="border p-3"
            >
              <h5>+</h5>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch({ type: "ADD TO CART", payload: { product, quantity } })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
