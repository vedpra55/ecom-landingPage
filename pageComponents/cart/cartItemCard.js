import Image from "next/image";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export default function CartItemCard({ item }) {
  return (
    <div className="md:hidden">
      <div className="  grid grid-cols-12 gap-x-3">
        <div className="col-span-4">
          <div className="relative w-full h-40">
            <Image
              fill
              className="w-full h-full object-cover"
              src={item.imgUrl}
              alt={item.name}
            />
          </div>
        </div>
        <div className="col-span-8 gap-y-2 w-full flex flex-col items-start justify-start">
          <p>{item.name}</p>
          <div className="flex items-center gap-x-5">
            <p className="text-xs line-through">{item.orignalPrice}</p>
            <p>{item.dicountedPrice}</p>
          </div>
          <p>Размер: S</p>

          <div className="flex gap-x-4  items-start">
            <div className="border rounded-lg p-1 cursor-pointer">
              <AiOutlineMinus />
            </div>
            <p>1</p>
            <div className="border rounded-lg p-1 cursor-pointer">
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
