import {
  NavBar,
  Footer,
  ProductContainer,
  ContactUs,
  Breadcrumbs,
} from "../../components";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { BsCheckLg } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Image from "next/image";
import { useState } from "react";

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

  const colors = [
    "bg-gray-200",
    "bg-green-500",
    "bg-orange-500",
    "bg-black",
    "bg-lime-400",
  ];

  const [selectSize, setSelectedSize] = useState(2);
  const [selectColor, setSelectedColor] = useState(2);

  return (
    <main>
      <NavBar />
      <section className="mt-[20px] mb-[115px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        <div className="grid grid-cols-12 gap-y-10  md:gap-x-[25px] mt-[30px]">
          <div className="col-span-12 md:col-span-6 flex flex-col">
            <div className="relative w-full h-[30rem] md:h-[35rem] 3xl:h-[566px] 3xl:w-[566px]">
              <Image
                className="w-full h-full object-cover border rounded-lg"
                alt={data.name}
                sizes="100vh"
                fill
                src={data.imgUrl}
              />
              <div className="absolute px-2 md:px-[30px] inset-0 flex justify-between items-center">
                <div className="bg-main rounded-full w-[40px] h-[40px] flex justify-center items-center text-white">
                  <SlArrowLeft className="" />
                </div>
                <div className="bg-main rounded-full w-[40px] h-[40px] flex justify-center items-center text-white">
                  <SlArrowRight className="" />
                </div>
              </div>
            </div>
            <div className="relative flex mt-[30px] items-center justify-between gap-x-[20px] 3xl:mr-5">
              {Array.from(Array(3)).map((item, i) => (
                <div
                  key={i}
                  className="relative w-full h-[172px] 3xl:w-[172px]"
                >
                  <Image
                    className="w-full h-full object-cover border rounded-lg"
                    alt={data.name}
                    sizes="100vh"
                    fill
                    src={data.imgUrl}
                  />
                </div>
              ))}
              <div className="absolute text-xs px-2 md:px-[10px] inset-0 flex justify-between items-center">
                <div className="bg-main rounded-full opacity-40 w-[25px] h-[25px] md:w-[40px] md:h-[40px] flex justify-center items-center text-white">
                  <SlArrowLeft className="" />
                </div>
                <div className="bg-main rounded-full opacity-40  w-[25px] h-[25px] md:w-[40px] md:h-[40px] flex justify-center items-center text-white">
                  <SlArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col ">
            <h2 className="font-bold text-3xl">Название товара</h2>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex gap-x-2  items-center">
                <div className="rounded-full p-1 bg-[#8CC851]"></div>
                <p>В наличии</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className=" text-[#F8991D]" />
                <p>{`(${"5"})`}</p>
              </div>
            </div>
            <div className="mt-[15px] flex gap-x-10 items-center">
              <p>Артикул: 35345</p>
              <p>Бренд: Названеи</p>
              <p className="text-main underline">Ссылка на товар</p>
            </div>
            <p className="mt-[15px]">
              Dokuma kumaştan diz boyu kruvaze kaban. Rahat kesimli, çentikli
              geniş klapalı, önü gizli çıtçıtlı, uzun reglan kollu, yan
              dikişlerde gizli cepli. Arkası tek yırtmaçlı, etek ucu düz
              kesimli. Astarlı.
            </p>
            <div className="mt-[15px]">
              <p className="font-semibold text-xl">Цена:</p>
              <div className="flex gap-x-5 items-center mt-[10px]">
                <p className="text-[14px]  opacity-50 line-through">6 500 ₽</p>
                <p className="text-main text-2xl font-semibold">2 500 ₽</p>
              </div>
            </div>
            <div className="mt-[20px]">
              <div className="flex items-end gap-x-5">
                <p className="font-semibold text-xl">Размер</p>
                <p className="text-main underline font-medium">
                  Руководство по размерам
                </p>
              </div>
              <div className="flex gap-x-[10px] gap-y-2 mt-[15px] mr-10 flex-wrap">
                {Array.from(Array(10)).map((item, i) => (
                  <div
                    onClick={() => setSelectedSize(i)}
                    key={i}
                    className={`${
                      i === selectSize && "font-bold bg-main text-white"
                    } border cursor-pointer btnHover hover:text-white w-[65px] h-[50px] flex justify-center items-center rounded-md`}
                  >
                    S
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[20px]">
              <p className="font-bold text-xl">Количество</p>
              <div className="border w-[195px] h-[52px] justify-between  items-center gap-x-5 rounded-lg mt-[10px] flex py-2 px-5 ">
                <AiOutlineMinus className="text-[#5E5E5E] w-56 cursor-pointer" />
                <div className="h-5 w-[18px] opacity-60 bg-[#5D5D5D]"></div>
                <p className="text-[#5E5E5E] text-xl font-medium px-5">2</p>
                <div className="h-5 w-[18px] opacity-60 bg-[#5D5D5D]"></div>
                <AiOutlinePlus className="text-[#5E5E5E] w-56 cursor-pointer" />
              </div>
            </div>
            <div className="mt-[30px]">
              <p className="font-bold text-xl">Цвет</p>
              <div className="flex gap-x-[15px] mt-[10px] items-center">
                {colors.map((item, i) =>
                  selectColor === i ? (
                    <div
                      key={i}
                      className={`${item}  cursor-pointer text-white rounded-full flex items-center justify-center  border-[10px]  border-opacity-80 border-orange-100  h-[50px] w-[50px]`}
                    >
                      <BsCheckLg />
                    </div>
                  ) : (
                    <div
                      onClick={() => setSelectedColor(i)}
                      key={i}
                      className={`${item} ${selectColor}  cursor-pointer rounded-full  h-[25px] w-[25px]`}
                    ></div>
                  )
                )}
              </div>
            </div>
            <div className="mt-[30px]">
              <button
                className={` btnHover hover:text-white text-main  w-[220px] h-[50px] border border-main  flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-3 py-2  px-5`}
              >
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
      <Footer noMargin={true} />
    </main>
  );
}
