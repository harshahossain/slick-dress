import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

export default function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="cartitems-format">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[item.id]}
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  src={removeIcon}
                  alt="remove"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}
