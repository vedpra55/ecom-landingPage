import {
  NavBar,
  Footer,
  ContactUs,
  ProductCard,
  Breadcrumbs,
} from "../../components";
import { GiShoppingCart } from "react-icons/gi";
import FilterOptions from "../../pageComponents/catalog/filterOptions";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Modal from "../../components/Modal/modal";

export default function CatalogPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectSize, setSelectedSize] = useState(2);

  const data = [
    {
      imgUrl: "/assets/product5.png",
      name: "Название товра,пример текста",
      orignalPrice: "3 500 ₽",
      dicountedPrice: "2 500 ₽",
      attribute: "В наличии",
      rating: 5,
    },
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
  ];
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
      <section className="myContainer mt-[20px]">
        <Breadcrumbs text={"Хлебные крошки"} />
        <p onClick={() => setIsOpen(true)} className=" cursor-pointer">
          Open Modal
        </p>
        {showFilter ? (
          <div className="md:hidden mt-4">
            <AiOutlineClose onClick={() => setShowFilter(false)} />
          </div>
        ) : (
          <div>
            <p className="mt-4 md:hidden" onClick={() => setShowFilter(true)}>
              Filters
            </p>
          </div>
        )}
        <div className="grid grid-cols-12 gap-x-5 mt-4 md:mt-[30px]">
          <FilterOptions showFilter={showFilter} />
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <h2 className="text-3xl font-bold">Доступные товары в наличие</h2>
            <div className="flex justify-between md:justify-start md:gap-x-[15px] items-center mt-[15px]">
              <p>Сортировать по:</p>
              <select className="border  py-2 md:w-[270px] md:h-[45px] rounded-[90px] px-3 border-[#D9D9D9]">
                <option className="">Сначала дешевые</option>
              </select>
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 mt-[15px]">
              {data.map((item, i) => (
                <div className="col-span-6 lg:col-span-4" key={i}>
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-10 mt-14 md:mt-20 lg:mt-[115px]">
          <p className="text-3xl font-bold">Похожие товары</p>
          <div className="grid grid-cols-12 mt-5 gap-x-5 gap-y-5">
            {data2.map((item, i) => (
              <div className=" col-span-6 md:col-span-4 lg:col-span-3" key={i}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className=" w-[350px] h-full md:w-[540px] md:h-[325px] rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[30px]">
          <div className="flex justify-center ">
            <p className="text-[32px]  font-bold">Выберите размер</p>
          </div>
          <div className="flex items-center justify-center mt-[30px] gap-x-[20px]">
            {Array.from(Array(5)).map((item, i) => (
              <div
                onClick={() => setSelectedSize(i)}
                key={i}
                className={`${
                  i === selectSize && "font-bold bg-[#0f6ea4] text-white"
                } border cursor-pointer btnHover hover:text-white w-[50px] h-[50px] md:w-[81px] md:h-[81px] flex justify-center items-center rounded-md`}
              >
                S
              </div>
            ))}
          </div>
          <div className=" mt-[30px] flex justify-center">
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
      </Modal>
      <ContactUs />
      <Footer noMargin={true} />
    </main>
  );
}
