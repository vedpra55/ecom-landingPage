import { NavBar, Footer } from "../../components";
import { AiOutlineRight } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main>
      <NavBar />
      <section className="myContainer mt-5">
        <div className="flex gap-x-5 items-center">
          <p className="text-main underline">Главная</p>
          <AiOutlineRight />
          <p>Хлебные крошки</p>
        </div>
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
            <div className="relative w-11 h-11">
              <Image fill alt="whatsapp" src="/assets/whatsapp.png" />
            </div>
            <div className="block bg-[#039BE5] rounded-full p-2 text-2xl text-white">
              <FaTelegramPlane />
            </div>
            <div className="block bg-[#039BE5] rounded-full p-2 text-2xl text-white">
              <BsInstagram />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
