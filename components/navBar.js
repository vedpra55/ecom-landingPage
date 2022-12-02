import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <header className="bg-white py-5  ">
      <div className="flex justify-between items-center myContainer">
        <button className="text-[18px] lg:hidden">
          <GiHamburgerMenu />
        </button>
        <div>
          <h2 className="text-2xl md:text-3xl font-medium">Cанкционка</h2>
        </div>
        <div className="relative">
          <input
            className="rounded-3xl w-[150px] md:w-[336px] border px-5 py-1 md:py-2  outline-[#D9D9D9] border-[#D9D9D9] placeholder:text-black"
            type="text"
            placeholder="Поиск товара"
          />
          <div className="text-xl flex items-center absolute inset-0 left-[18rem] text-main ">
            <AiOutlineSearch />
          </div>
        </div>
        <div className="hidden lg:flex items-start gap-x-3">
          <div className="text-xl text-main pt-1">
            <MdEmail />
          </div>
          <div>
            <p className="font-medium ">example@info.com</p>
            <p className=" text-main underline">Написать нам</p>
          </div>
        </div>
        <div className="hidden lg:block bg-[#039BE5] rounded-full p-2 text-2xl text-white">
          <FaTelegramPlane />
        </div>
        <div className="hidden lg:block bg-[#039BE5] rounded-full p-2 text-2xl text-white">
          <BsInstagram />
        </div>
        <div className="hidden md:flex items-center gap-x-2">
          <div className="bg-[#039BE5] rounded-full p-2 text-2xl text-white">
            <GiShoppingCart />
          </div>
          <div>
            <p className=" font-medium">Корзина:</p>
            <p>1455 ₽</p>
          </div>
        </div>
      </div>
    </header>
  );
}
