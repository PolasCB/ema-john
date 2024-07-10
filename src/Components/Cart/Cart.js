import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
    const { name, price, img, seller, stock } = props.pdDetails;
    const product = props.pdDetails;
    const addtoCart = props.clickHandler;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>By : {seller}</small>
        </p>
        <p>Price : ${price}</p>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <br />
        <button
          className="add-to-cart"
          type="button"
          onClick={() => addtoCart(product)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
