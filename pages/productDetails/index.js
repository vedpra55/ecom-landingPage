import { NavBar, Footer, ProductContainer, ContactUs } from "../../components";
import { GiShoppingCart } from "react-icons/gi";
import {
  AiOutlineRight,
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

import { BsCheckLg } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Image from "next/image";

export default function ProductDetailsPage() {
  const data = {
    imgUrl: "/assets/productD.png",
    name: "Название товра,пример текста",
    orignalPrice: "3 500 ₽",
    dicountedPrice: "2 500 ₽",
    attribute: "В наличии",
    rating: 5,
  };

  const data2 = [
    {
      imgUrl: "/assets/product6.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
    {
      imgUrl: "/assets/product7.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
    {
      imgUrl: "/assets/product8.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
    {
      imgUrl: "/assets/product5.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
  ];

  return (
    <main>
      <NavBar />
      <section className="my-5 mb-20 myContainer">
        <div className="flex gap-x-5 items-center">
          <p className="text-main underline">Главная</p>
          <AiOutlineRight />
          <p>Хлебные крошки</p>
        </div>
        <div className="grid grid-cols-12 gap-y-10  md:gap-x-10 mt-5">
          <div className="col-span-12 md:col-span-6 flex flex-col">
            <div className="relative w-full h-[30rem] md:h-[35rem]">
              <Image
                className="w-full h-full object-cover border rounded-lg"
                alt={data.name}
                sizes="100vh"
                fill
                src={data.imgUrl}
              />
              <div className="absolute px-2 inset-0 flex justify-between items-center">
                <div className="bg-main rounded-full p-3 text-white">
                  <SlArrowLeft className="" />
                </div>
                <div className="bg-main rounded-full p-3 text-white">
                  <SlArrowRight className="" />
                </div>
              </div>
            </div>
            <div className="relative flex mt-5 items-center justify-between gap-x-5">
              <div className="relative w-full h-28">
                <Image
                  className="w-full h-full object-cover border rounded-lg"
                  alt={data.name}
                  sizes="100vh"
                  fill
                  src={data.imgUrl}
                />
              </div>
              <div className="relative w-full h-28">
                <Image
                  className="w-full h-full  object-cover border rounded-lg"
                  alt={data.name}
                  sizes="100vh"
                  fill
                  src={data.imgUrl}
                />
              </div>
              <div className="relative w-full h-28">
                <Image
                  className="w-full h-full  object-cover border rounded-lg"
                  alt={data.name}
                  sizes="100vh"
                  fill
                  src={data.imgUrl}
                />
              </div>
              <div className="absolute text-xs px-2 inset-0 flex justify-between items-center">
                <div className="bg-main rounded-full opacity-40 p-3 text-white">
                  <SlArrowLeft className="" />
                </div>
                <div className="bg-main rounded-full opacity-40 p-3 text-white">
                  <SlArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col gap-y-2">
            <h2 className="font-bold text-3xl">Название товара</h2>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-2  items-center">
                <div className="rounded-full p-1 bg-[#8CC851]"></div>
                <p>В наличии</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className=" text-[#F8991D]" />
                <p>{`(${"5"})`}</p>
              </div>
            </div>
            <div className="flex gap-x-10 items-center">
              <p>Артикул: 35345</p>
              <p>Бренд: Названеи</p>
              <p className="text-main underline">Ссылка на товар</p>
            </div>
            <p>
              Dokuma kumaştan diz boyu kruvaze kaban. Rahat kesimli, çentikli
              geniş klapalı, önü gizli çıtçıtlı, uzun reglan kollu, yan
              dikişlerde gizli cepli. Arkası tek yırtmaçlı, etek ucu düz
              kesimli. Astarlı.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-xl">Цена:</p>
              <div className="flex gap-x-4 items-center mt-2">
                <p className="text-[14px]  opacity-50 line-through">6 500 ₽</p>
                <p className="text-main text-2xl font-semibold">2 500 ₽</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-end gap-x-5">
                <p className="font-semibold text-xl">Размер</p>
                <p className="text-main underline font-medium">
                  Руководство по размерам
                </p>
              </div>
              <div className="flex gap-x-5 gap-y-2 mt-5 mr-10 flex-wrap">
                <div className="border py-2 px-5 rounded-md">S</div>
                <div className="border py-2 px-5 rounded-md">S</div>
                <div className="border py-2 px-5 font-bold bg-main text-white rounded-md">
                  S
                </div>
                <div className="border py-2 px-5 rounded-md">S</div>
                <div className="border py-2 px-5 rounded-md">S</div>
                <div className="border py-2 px-5 rounded-md">S</div>
                <div className="border py-2 px-5 rounded-md">S</div>
                <div className="border py-2 px-5 rounded-md">S</div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Количество</p>
              <div className="border w-56 justify-between  items-center gap-x-5 rounded-lg mt-2 flex py-2 px-5 ">
                <AiOutlineMinus className="text-[#5E5E5E]" />
                <div className="h-5 w-[2px] opacity-60 bg-[#5D5D5D]"></div>
                <p className="text-[#5E5E5E] text-xl font-medium px-5">2</p>
                <div className="h-5 w-[2px] opacity-60 bg-[#5D5D5D]"></div>
                <AiOutlinePlus className="text-[#5E5E5E]" />
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Цвет</p>
              <div className="flex gap-x-3 mt-4 items-center">
                <div className="rounded-full bg-gray-200 h-[25px] w-[25px]"></div>
                <div className="rounded-full bg-green-500 h-[25px] w-[25px]"></div>
                <div className=" text-white rounded-full flex items-center justify-center bg-orange-500 h-[25px] w-[25px]">
                  <BsCheckLg />
                </div>
                <div className="rounded-full bg-black h-[25px] w-[25px]"></div>
                <div className="rounded-full bg-lime-400 h-[25px] w-[25px]"></div>
              </div>
            </div>
            <div className="mt-4">
              <button className="border border-main text-main flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-5 py-2  px-5">
                <GiShoppingCart className=" md:text-2xl" />
                <p className=" text-[15px] font-semibold whitespace-nowrap">
                  Добавить в корзину
                </p>
              </button>
            </div>
          </div>
        </div>
        <ProductContainer products={data2} title="Похожие товары" />
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
}
