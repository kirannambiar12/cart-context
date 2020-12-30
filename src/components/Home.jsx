import React from "react";
import {useSelector} from 'react-redux';
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";

const Home = () => {
  const {products} = useSelector(state => state.ProductsReducer);
  return (
    <div className="container mt-5">
      <div className="row">
        {React.Children.toArray(products.map((product) => (
          <div className="col-4 my-5">
            <Link to={`/detail/${product.id}`}>
            <img className="img-fluid" src={product.imgUrl} alt="" />
            <h5>{product.title}</h5>
            <span>
              {currencyFormatter.format(product.price, { code: 'INR' })}
            </span> <br/>
            </Link>
            
          </div>
        )))}
      </div>
    </div>
  );
};

export default Home;
