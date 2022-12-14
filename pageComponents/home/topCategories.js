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
      <div className=" grid grid-cols-12 gap-2 md:gap-[15px] h-full w-full">
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
            <div className="z-10 absolute inset-0 py-2 md:py-5 gap-y-1 md:gap-y-[15px] flex flex-col text-white justify-end items-start px-2 md:px-[25px] h-full">
              <h5 className="font-medium text-[18px] md:font-bold lg:text-xl w-full md:w-44 leading-6  md:text-[24px] ">
                {item.name}
              </h5>
              <p className=" opacity-60 text-[13px] md:text-[18px]">
                {item.price}
              </p>
              <button className="btnHover hover:bg-red-600 lg:w-[172px] lg:h-[44px] flex justify-center items-center bg-main rounded-[90px]   md:w-auto text-[15px] md:text-[16px] px-5 py-1  font-semibold  whitespace-nowrap lg:px-[52px]">
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
