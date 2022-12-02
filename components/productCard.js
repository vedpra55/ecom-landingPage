import Image from "next/image";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

export default function ProductCard({ product }) {
  return (
    <div className="shadow-lg rounded-b-lg w-full h-full pb-2">
      <div className="relative w-full h-80 rounded-t-lg">
        <Image
          fill
          className="w-full h-full object-fill rounded-t-lg"
          src={product.imgUrl}
          alt={product.name}
        />
        <div className=" absolute h-8 inset-0 px-2 py-2 flex justify-between">
          <div className="flex items-center  gap-x-2 text-[13px]">
            {product.attribute}
          </div>
          <div className="flex items-center">
            <AiFillStar className=" text-main" />
            <p>{`(${product.rating})`}</p>
          </div>
        </div>
      </div>
      <div className="bg-white gap-y-2 flex flex-col justify-center items-center py-2">
        <p className=" text-center px-5 md:px-10 font-medium">{product.name}</p>
        <div className="flex items-center gap-x-3">
          <p className=" opacity-40 line-through">{product.orignalPrice}</p>
          <p className=" font-semibold">{product.dicountedPrice}</p>
        </div>
        <button className="border border-main text-main flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-5 py-1  px-2">
          <GiShoppingCart className=" md:text-xl" />
          <p className="text-xs md:text-[14px] whitespace-nowrap">
            Добавить в корзину
          </p>
        </button>
      </div>
    </div>
  );
}
