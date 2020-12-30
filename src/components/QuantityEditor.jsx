import React from "react";
import {useDispatch, useSelector} from "react-redux"

const QuantityEditor = ({ product }) => {
    const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center">
      <div onClick={() => dispatch({ type: 'DEC', payload: product.id})} className="border p-3">
        <h5>-</h5>
      </div>
      <div className="border px-4 py-3">
        <h5>{product.quantity}</h5>
      </div>
      <div onClick={() => dispatch({ type: 'INC', payload: product.id})} className="border p-3">
        <h5>+</h5>
      </div>
    </div> 
  );
};

export default QuantityEditor;
