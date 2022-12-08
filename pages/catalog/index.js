import { NavBar, Footer, ContactUs, ProductCard } from "../../components";
import FilterOptions from "../../pageComponents/catalog/filterOptions";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function CatalogPage() {
  const [showFilter, setShowFilter] = useState(false);

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
      <section className="myContainer">
        <div className="flex gap-x-5 mt-5 items-center ">
          <p className="text-main underline">Главная</p>
          <AiOutlineRight />
          <p>Хлебные крошки</p>
        </div>
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
        <div className="grid grid-cols-12 gap-x-5 mt-5">
          <FilterOptions showFilter={showFilter} />

          <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-20">
            <h2 className="text-3xl font-bold">Доступные товары в наличие</h2>
            <div className="flex justify-between md:justify-start md:gap-x-5 items-center mt-5">
              <p>Сортировать по:</p>
              <select className="border rounded-2xl py-2 px-2 md:px-10 border-[#D9D9D9]">
                <option className="">Сначала дешевые</option>
              </select>
            </div>
            <div className="grid grid-cols-12 gap-x-5 gap-y-5 mt-5">
              {data.map((item, i) => (
                <div className="col-span-6 lg:col-span-4" key={i}>
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-10">
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
      <ContactUs />
      <Footer />
    </main>
  );
}
