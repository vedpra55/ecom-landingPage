/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import TopHeading from "./topHeading";
import CategoryBar from "./categoryBar";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsCart4 } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export default function NavBar() {
  const [isMenu, setMenu] = useState(false);

  return (
    <div>
      <TopHeading />
      <header className="relative bg-white py-5 md:py-0 md:h-[120px]  font-gilroy ">
        {isMenu && (
          <div className="lg:hidden absolute w-full z-10 inset-0">
            <div className="bg-black py-5 px-5  ">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={() => setMenu(false)}
                  className="text-white"
                />
              </div>
              <div className="flex justify-start items-start flex-col gap-y-5">
                <div className="flex items-start gap-x-3">
                  <div className="text-xl text-main pt-1">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="font-medium  text-white">example@info.com</p>
                    <p className=" text-main underline">Написать нам</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-5">
                  <div className=" bg-[#039BE5] rounded-full p-2 text-2xl text-white">
                    <FaTelegramPlane />
                  </div>
                  <div className=" bg-[#039BE5] rounded-full p-2 text-2xl text-white">
                    <BsInstagram />
                  </div>
                </div>
                <Link href={"/cart"}>
                  <div className="flex text-white items-center gap-x-2">
                    <div className="bg-[#039BE5] rounded-full p-2 text-2xl text-white">
                      <GiShoppingCart />
                    </div>
                    <div>
                      <p className=" font-medium">Корзина:</p>
                      <p>1455 ₽</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex w-full h-full justify-between items-center myContainer">
          <button
            onClick={() => setMenu(true)}
            className="text-[18px] lg:hidden"
          >
            <GiHamburgerMenu />
          </button>
          <Link href={"/"}>
            <h2 className=" 3xl:text-red-500 text-2xl md:text-3xl 2xl:text-[40px] font-medium">
              Cанкционка
            </h2>
          </Link>
          <div className="relative">
            <input
              className="rounded-[90px] flex items-center w-[150px] md:w-[336px] md:h-[52px] border px-[30px] py-2 md:py-[18px]  outline-[#D9D9D9] border-[#D9D9D9] placeholder:text-black"
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
          <div className="hidden hover:bg-white linkHover hover:text-main cursor-pointer lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl text-white">
            <FaTelegramPlane />
          </div>
          <div className="hidden cursor-pointer insta hover:text-main lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl text-white">
            <BsInstagram />
          </div>
          <Link href={"/cart"}>
            <div className="hidden   md:flex items-center gap-x-2">
              <div className="hidden hover:bg-white linkHover hover:text-main lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl text-white">
                <BsCart4 />
              </div>
              <div>
                <p className=" font-medium">Корзина:</p>
                <p>1455 ₽</p>
              </div>
            </div>
          </Link>
        </div>
      </header>
      <CategoryBar />
    </div>
  );
}
