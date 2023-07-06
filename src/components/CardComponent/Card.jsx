import React from "react";
import "./cardStyle.css";

function Card({ id, name, model, brand, price, bestSeller, clickedProduct }) {
  return (
    <div>
      <div onClick={() => clickedProduct(id)} className="card productCard">
        <div className="card-header">Featured</div>
        <ul key={id} className="list-group list-group-flush">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{model}</li>
          <li className="list-group-item">{brand}</li>
          <li className="list-group-item">{price}</li>
          {console.log(bestSeller)}
          {bestSeller === id ? (
            <li className="list-group-item">Best Seller</li>
          ) : (
            true
          )}
        </ul>
      </div>
    </div>
  );
}

export default Card;
