import React from "react";
import Image from "next/image";

export default function OrderItemTable({ item }) {
  return (
    <div className="hidden md:grid grid-cols-12 gap-x-5">
      <div className="relative w-full h-36 col-span-2">
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
      <div className="col-span-3">
        <p>1</p>
      </div>

      <div className="col-span-2">
        <p>{item.dicountedPrice}</p>
      </div>

      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
