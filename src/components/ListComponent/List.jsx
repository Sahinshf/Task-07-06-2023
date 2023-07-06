import React from "react";
import Card from "../CardComponent/Card";
import "./listStyle.css";

function List({ products }) {
  console.log(products);
  return (
    <div>
      <div className="producList">
        {products.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              model={e.model}
              brand={e.brand}
              price={e.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
