import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

export default function CartItems() {
  const { all_product, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);
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
              <div className="cartitems-format cartitems-main">
                <img
                  className="cartitems-product-icon"
                  src={item.image}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button
                  className="cartitems-quantity"
                  onClick={() => {
                    addToCart(item.id);
                  }}
                >
                  {cartItems[item.id]}+
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  src={removeIcon}
                  alt="remove"
                  className="cartitems-remove"
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
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>Free<p></p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promo">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promo-box">
            <input
              type="text"
              name="promocode"
              id="promocode"
              placeholder="Promo Code"
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
