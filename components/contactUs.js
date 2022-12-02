import Image from "next/image";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="my-10">
      <div className="relative w-full h-56">
        <Image
          fill
          className="w-full h-full object-cover"
          alt="banner"
          src={"/assets/banner.png"}
        />
        <div className="bannerGradient absolute inset-0 w-full  h-full">
          <div className="myContainer text-white gap-y-2 justify-center items-start h-56 flex flex-col py-5">
            <p className=" font-bold text-xl md:text-2xl">
              Возникли проблемы с поиском ?
            </p>
            <p>Задайте вопросы менеджеру</p>
            <button className="mt-3 rounded-3xl border border-main items-center  py-2 px-10 flex gap-x-5">
              <div className=" bg-[#039BE5] rounded-full p-2  text-white">
                <FaTelegramPlane />
              </div>
              <p>Telegram чат</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
