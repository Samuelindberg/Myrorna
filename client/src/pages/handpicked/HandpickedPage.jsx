import React, { useState, useEffect } from "react";
import axios from "axios";
import HandPickedItem from "./HandPickedItem";
export default function HandpickedPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/handpickedproducts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="handpicked-page">
      <h1 id="handpicked-page-title">Handpicked Items!</h1>
      <div className="handpicked-items-container">
        {products.map((product) => {
          if (product.brandName.includes("ASOS")) {
            product.brandName = product.brandName.replace("ASOS", "");
            console.log(product.brandName);
          }
          <HandPickedItem
            brandName={product.brandName}
            imgUrl={product.imgUrl}
            type={product.type}
            price={product.price}
            size={product.size}
          />;
        })}
      </div>
    </section>
  );
}
