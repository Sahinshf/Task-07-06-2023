import React, { useState } from "react";
import List from "./ListComponent/List";

function Content() {
  const [bestSeller, setBestSeller] = useState("");

  const clickedProduct = (id) => {
    setBestSeller(id);
  };

  const products = [
    {
      id: 1,
      name: "Iphone 12",
      price: 1000,
      model: "A123",
      brand: "Apple",
    },
    {
      id: 2,
      name: "Iphone 12 pro",
      price: 1200,
      model: "A345",
      brand: "Apple",
    },
    {
      id: 3,
      name: "Iphone 12 pro max",
      price: 1500,
      model: "C549",
      brand: "Apple",
    },
    {
      id: 4,
      name: "Iphone 13 pro max",
      price: 1600,
      model: "G5431",
      brand: "Apple",
    },
    {
      id: 5,
      name: "Iphone 14 Plus",
      price: 1700,
      model: "A651S2",
      brand: "Apple",
    },
  ];

  return (
    <div>
      <List
        products={products}
        clickedProduct={clickedProduct}
        bestSeller={bestSeller}
      />
    </div>
  );
}

export default Content;
