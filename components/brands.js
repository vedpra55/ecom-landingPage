import Image from "next/image";
import React from "react";

export default function Brands() {
  const data = [
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
  ];

  return (
    <section className="myContainer my-10">
      <p className=" font-bold text-2xl">Брнеды которые мы доставляем</p>
      <div className="grid grid-cols-12 gap-5 mt-5 ">
        {data.map((item) => (
          <div
            className="relative w-full col-span-6 md:col-span-3 lg:col-span-3 h-20 md:h-36 bg-white shadow-md rounded-lg"
            key={item.imgUrl}
          >
            <Image
              className="w-full h-full object-contain px-5"
              fill
              alt="brands"
              src={item.imgUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
