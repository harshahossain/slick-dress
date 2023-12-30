import { useContext } from "react";
import "./Styles/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import MensBanner from "../Components/Banners/MensBanner";
import WomensBanner from "../Components/Banners/WomensBanner";
import KidsBanner from "../Components/Banners/KidsBanner";
import all_product from "../Components/Assets/all_product";
import Item from "../Components/Item/Item";

export default function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shop-category-banner">
        {props.category === "men" && <MensBanner />}
        {props.category === "women" && <WomensBanner />}
        {props.category === "kid" && <KidsBanner />}
      </div>

      <div className="shop-category-discription">
        <h2>Browse All {props.category}s Collection Here</h2>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, ind) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
