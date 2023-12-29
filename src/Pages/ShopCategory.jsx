import { useContext } from "react";
import "./Styles/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";

export default function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);
  return <div className="shop-category"></div>;
}
