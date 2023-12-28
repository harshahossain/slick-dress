import "./Item.css";

export default function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.newPrice}</div>
        <div className="item-price-old">${props.oldPrice}</div>
      </div>
    </div>
  );
}
