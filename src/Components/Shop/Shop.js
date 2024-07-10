import React, { useState } from "react";
import "./Shop.css";
import products from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [items, setProduct] = useState(products);

  const [cart, setCart] = useState([]);

  const addProductHandel = (product) => {
    const newCart = [...cart, product];
      setCart(newCart);
  };
 const tottal = cart.reduce((sum, singleValue)=> sum+singleValue.price,0)
  return (
    <div className="shop-container">
      <div className="product-container">
        {items.map((pd) => (
          <Cart
            clickHandler={addProductHandel}
            key={pd.id}
            pdDetails={pd}
          ></Cart>
        ))}
      </div>

      <div className="cart-container">
        <h2>
          Cart <FontAwesomeIcon size="1x" icon={faCartShopping} />
          {cart.length} Product
        </h2>
        <h4>Total Price : ${tottal}</h4>
      </div>
    </div>
  );
};

export default Shop;
