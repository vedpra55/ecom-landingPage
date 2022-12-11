import React from "react";
import Image from "next/image";

import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export default function CartItemTable({ item }) {
  return (
    <div className="hidden md:grid grid-cols-12 gap-x-5">
      <div className="relative w-full h-[125px] col-span-1">
        <Image
          className=" object-cover"
          fill
          src={item.imgUrl}
          alt={item.name}
        />
      </div>
      <div className="col-span-3 w-[90%]">
        <p>{item.name}</p>
      </div>
      <div className="col-span-2">
        <p>S</p>
      </div>
      <div className="col-span-2 flex gap-x-4  items-start">
        <div className="border rounded-lg p-1 cursor-pointer">
          <AiOutlineMinus />
        </div>
        <p>1</p>
        <div className="border rounded-lg p-1 cursor-pointer">
          <AiOutlinePlus />
        </div>
      </div>
      <div className="col-span-2">
        <p>{item.dicountedPrice}</p>
      </div>
      <div className="col-span-2 relative">
        <p>{item.dicountedPrice}</p>
        <div className="absolute cursor-pointer inset-0 flex justify-end">
          <AiOutlineClose className="text-[#EE4932] text-2xl" />
        </div>
      </div>
      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
