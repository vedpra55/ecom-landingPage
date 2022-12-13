import Image from "next/image";
import React, { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className={`cardShadow cardHover  w-full 3xl:w-[280px]  pb-2`}>
      <Link href={"/productDetails"}>
        <div className="relative w-full h-[390px] rounded-t-lg">
          <Image
            fill
            sizes="100vh"
            className="w-full h-full object-fill rounded-t-lg"
            src={product.imgUrl}
            alt={product.name}
          />
          <div className=" absolute h-8 inset-0 px-2 py-2 flex justify-between">
            <div className="flex items-center  gap-x-1 text-[13px]">
              <div className="rounded-full p-1 bg-[#8CC851]"></div>
              {product.attribute}
            </div>
            <div className="flex items-center">
              <AiFillStar className=" text-main" />
              <p>{`(${product.rating})`}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="bg-white gap-y-2 flex flex-col justify-center items-center py-2">
        <p className=" text-center px-5 md:px-10 font-medium">{product.name}</p>
        <div className="flex items-center gap-x-3">
          <p className=" opacity-40 line-through">{product.orignalPrice}</p>
          <p className=" font-semibold">{product.dicountedPrice}</p>
        </div>
        <button
          className={` btnHover hover:text-white border lg:mx-0  2xl:w-[228px] 2xl:h-[44px]    border-main text-main flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-[13px] py-2 px-2 md:px-4`}
        >
          <GiShoppingCart className=" md:text-xl" />
          <p className="text-xs text-[14px] md:text-[15px] whitespace-nowrap">
            Добавить в корзину
          </p>
        </button>
      </div>
    </div>
  );
}
