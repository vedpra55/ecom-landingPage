/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function TopCategories() {
  const data = [
    {
      imgUrl: "/assets/category1.png",

      name: "Название категории",
      price: "376 товара",
    },

    {
      imgUrl: "/assets/category2.png",
      name: "Название категории",
      price: "376 товара",
    },
    {
      imgUrl: "/assets/category3.png",
      name: "Название категории",
      price: "376 товара",
    },
    {
      imgUrl: "/assets/category4.png",
      name: "Название категории",
      price: "376 товара",
    },
    {
      imgUrl: "/assets/category5.png",
      name: "Название категории",
      price: "376 товара",
    },
  ];

  return (
    <section className="my-10 myContainer">
      <h5 className=" font-bold text-3xl pb-5">Популярные категории</h5>
      <div className=" grid grid-cols-12 gap-3 h-full w-full">
        {data.map((item, i) => (
          <div
            key={i}
            className={` relative ${
              i === 0 && " row-span-2 h-full"
            } h-full md:col-span-4 col-span-6 p-0 rounded-xl`}
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full rounded-xl"
                src={item.imgUrl}
                alt={item.name}
              />
            </div>
            <div className="z-10 absolute inset-0 py-2 md:py-5  gap-y-2 flex flex-col text-white justify-end items-start px-2 md:px-10 h-full">
              <h5 className="font-bold lg:text-xl w-full md:w-44 leading-6 text-[18px] ">
                {item.name}
              </h5>
              <p className=" opacity-60 text-[13px] md:text-[16px]">
                {item.price}
              </p>
              <button className=" bg-main rounded-2xl py-[2px] w-full md:w-auto text-[12px] md:text-[16px] md:py-[6px]  whitespace-nowrap px-10">
                В каталог
              </button>
            </div>
            <div className="categoryCardGradient absolute inset-0 w-full rounded-xl h-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
