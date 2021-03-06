import React from 'react';
import { Link } from 'react-router-dom';

import QuantityBtns from './QuatityBtns';

const Product = props => {
   const { _id, image, name, price } = props.product;

   return (
      <div className="product">
         <Link to={`/products/${_id}`}>
            <img
               className="product__img"
               alt={name}
               src={image}
            />
         </Link>
         <div className="product__details">
            <h3 className="product__name">{name}</h3>
            <p className="product__price">PHP
               <span>{price}</span>
            </p>
            <QuantityBtns />
            <button className="product__btn btn btn--primary d-block w-100">Add to Cart</button>
         </div>
      </div>
   );
}

export default Product;   