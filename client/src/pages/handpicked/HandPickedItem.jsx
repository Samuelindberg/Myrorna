import React from "react";
import { Link } from "react-router-dom";
export default function HandPickedItem(props) {
  return (
    <div className="handpicked-item">
      <img src={"http://" + props.imgUrl} alt="" id="handpicked-item-img" />
      <h1 id="handpicked-item-title">
        {props.brandName} {props.type}
      </h1>
      <h3 id="handpicked-price">{props.price * 10} kr</h3>
      <h3 id="handpicked-size">{props.size}</h3>
      <Link id="handpicked-buy"> BUY!</Link>
    </div>
  );
}
