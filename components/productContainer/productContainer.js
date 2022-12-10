import Link from "next/link";
import React from "react";
import ProductCard from "../productCard/productCard";

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
    <div className="mt-[50px] lg:mt-[70px] ">
      <div className="flex justify-between items-start">
        <h5 className=" font-bold text-2xl md:text-3xl pb-5 md:pb-0">
          {title}
        </h5>
        <Link href={"/catalog"}>
          <p className="text-main underline font-medium whitespace-nowrap">
            Перейти в каталог
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-3 gap-y-5 md:gap-5 3xl:gap-[27px] mt-4 md:mt-[29px]">
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
