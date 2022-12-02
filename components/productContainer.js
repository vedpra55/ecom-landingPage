import React from "react";
import ProductCard from "./productCard";

export default function ProductContainer({ products, title }) {
  const data = [
    {
      imgUrl: "/assets/product1.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
    {
      imgUrl: "/assets/product2.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
    {
      imgUrl: "/assets/product3.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
    {
      imgUrl: "/assets/product4.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
  ];

  return (
    <div className="my-10 myContainer">
      <div className="flex justify-between items-start">
        <h5 className=" font-bold text-3xl pb-5">{title}</h5>
        <p className="text-main underline font-medium">Перейти в каталог</p>
      </div>
      <div className="grid grid-cols-12 gap-3 md:gap-5 mt-5">
        {products.map((item) => (
          <div
            className="col-span-6 md:col-span-4 lg:col-span-3"
            key={item.imgUrl}
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
