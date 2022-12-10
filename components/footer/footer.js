import React from "react";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-[80px]">
      <div className="bg-[#181818] w-full ">
        <div className="myContainer text-white py-5 gap-y-5 grid grid-cols-12 gap-x-5">
          <div className="col-span-12 sm:col-span-5 lg:col-span-3 flex flex-col items-start justify-start gap-y-2">
            <p className="font-medium text-2xl">Cанкционка</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account.
            </p>
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-col items-start justify-start gap-y-2">
            <p className="font-medium text-xl">Разделы</p>
            <p>Главная</p>
            <p>Каталог товаров</p>
            <p>Бренды</p>
            <p>FAQ</p>
          </div>
          <div className="col-span-6 md:col-span-5  flex flex-col items-start justify-start gap-y-2">
            <p className="font-medium text-xl ">Категории</p>
            <div className="flex justify-between gap-x-5">
              <div className="flex flex-col gap-y-1 ">
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
                <p className="hover:text-main cursor-pointer">
                  Название категории
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-8 sm:col-span-3 lg:col-span-2 flex flex-col items-start justify-start gap-y-2">
            <p className="font-medium text-xl">Контакты</p>
            <div className="flex items-start gap-x-3">
              <div className="text-xl text-main pt-1">
                <MdEmail />
              </div>
              <div>
                <p className="font-medium ">example@info.com</p>
                <p className=" text-main underline">Написать нам</p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="hidden hover:bg-white linkHover hover:text-main cursor-pointer lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl text-white">
                <FaTelegramPlane />
              </div>
              <div className="hidden hover:text-main insta cursor-pointer  lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl text-white">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-white text-[14px] justify-center py-4 bg-[#141414]">
        <p>Все права защищены. 2022</p>
      </div>
    </footer>
  );
}
