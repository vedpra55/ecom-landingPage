import { NavBar, Footer, Breadcrumbs } from "../../components";
import { AiOutlineRight } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [telegramClicked, setTelegramClicked] = useState(null);
  const [cartClicked, setCartClicked] = useState(null);
  const [instaClicked, setInstaClicked] = useState(null);

  function handleClick(type) {
    if (type == "tele") {
      setTelegramClicked(true);
      setCartClicked(false);
      setInstaClicked(false);
    }
    if (type == "cart") {
      setCartClicked(true);
      setTelegramClicked(false);
      setInstaClicked(false);
    }
    if (type == "insta") {
      setInstaClicked(true);
      setTelegramClicked(false);
      setCartClicked(false);
    }

    setTimeout(() => {
      setInstaClicked(false);
      setTelegramClicked(false);
      setCartClicked(false);
    }, 1500);
  }

  return (
    <main>
      <NavBar />
      <section className="myContainer mt-5">
        <Breadcrumbs text={"Хлебные крошки"} />
        <h2 className="font-bold text-3xl mt-5">Наши контакты</h2>
        <div className="flex flex-wrap gap-y-10 gap-x-10 justify-between mt-5 mb-20 items-center">
          <div className="flex flex-wrap gap-y-4 gap-x-10">
            <div className="flex items-start gap-x-3">
              <div className="text-xl text-main pt-1">
                <MdEmail />
              </div>
              <div>
                <p className="font-medium ">example@info.com</p>
                <p className=" text-main underline">Написать нам</p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="text-xl text-main pt-1">
                <FaTelegramPlane />
              </div>
              <div>
                <p className="font-medium ">+7 (800) 890-65-12</p>
                <p className=" ">c 10.00 до 22.00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="relative w-14 h-14">
              <Image fill alt="whatsapp" src="/assets/whatsapp.png" />
            </div>
            <div
              onClick={() => handleClick("tele")}
              className={`${
                telegramClicked
                  ? "linkClicked text-main"
                  : "hover:bg-white text-white linkHover"
              } hidden   hover:text-main cursor-pointer lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl `}
            >
              <FaTelegramPlane />
            </div>
            <div
              onClick={() => handleClick("insta")}
              className={` ${
                instaClicked
                  ? "linkClicked text-main"
                  : "hover:bg-white text-white linkHover insta"
              } hidden cursor-pointer  hover:text-main lg:flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl `}
            >
              <BsInstagram />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
