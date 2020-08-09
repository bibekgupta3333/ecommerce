import React from 'react';
import './styles.css';

import { useCart } from '../../../providers/CartProvider';

const CartItem = () => {
  const { cart, removeProduct } = useCart();

  return (
    <div className="cart-wrapper">
      <div className="cart-table-header mt-30">
        <div className="product">Product</div>
        <div className="price">Price</div>
      </div>
      {cart.map((product, index) => (
        <div className="cart-item" key={ index }>
          <div className="cart-img">
            <img src={ `${process.env.REACT_APP_ECOMMERCE_API_URL}${ product.image_url }` } alt="cart-item" />
            <h4>{ product.title }</h4>
          </div>
          <span>$ { product.price }</span>
          <span className="cart-item-remove" onClick={ () => removeProduct(product) }>X</span>
        </div>
      ))}
    </div>
  )
}

export default CartItem;