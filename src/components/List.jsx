import React from "react";
import Card from "./Card";
import "./listStyle.css";

function List({ products, clickedProduct, bestSeller }) {
  console.log(products);
  return (
    <div>
      <div className="producList">
        {products.map((e) => {
          {
            console.log(e.name);
          }
          console.log(bestSeller);
          return (
            <Card
              // key={e.id}
              id={e.id}
              name={e.name}
              model={e.model}
              brand={e.brand}
              price={e.price}
              clickedProduct={clickedProduct}
              bestSeller={bestSeller}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
