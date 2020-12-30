import React from "react";
import QuantityEditor from "./QuantityEditor";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();

  return (
    <div className="container my-5">
      <div className="row">
      { state.products && state.products.length > 0 ?
        <div className="col-12">
          {state.products &&
            state.products.map((product) => (
              <div className="col-4 mx-auto border">
                <img className="img-fluid" src={product.imgUrl} alt="" />
                <h4>{product.title}</h4>
                <p>{product.price * product.quantity}</p>
                <QuantityEditor product={product} />
                <span onClick={() => dispatch({ type: "REMOVE", payload: product.id })}>DELETE</span>
              </div>
            ))}
        </div>: <p>No items in the cart</p>
      }
      </div>
    </div>
  );
};

export default Cart;
