import React, { useState } from "react";
import "./cardStyle.css";

function Card({ id, name, model, brand, price }) {
  const [bestSeller, setBestSeller] = useState("");

  const clickedProduct = (id) => {
    setBestSeller(id);
  };

  return (
    <div>
      <div onClick={() => clickedProduct(id)} className="card productCard">
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>{name}</h4>
          </li>
          <li className="list-group-item">{model}</li>
          <li className="list-group-item">{brand}</li>
          <li className="list-group-item">{price}</li>
          {console.log(bestSeller)}
          {bestSeller === id && (
            <li className="list-group-item">Best Seller</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Card;
