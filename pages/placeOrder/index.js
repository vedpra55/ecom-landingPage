import { NavBar, Footer } from "../../components";
import { AiOutlineRight } from "react-icons/ai";

import Image from "next/image";
import OrderItemTable from "../../pageComponents/placeOrder/orderItemTable";
import OrderItemCard from "../../pageComponents/placeOrder/orderItemCard";

export default function PlaceOrderPage() {
  const header = [
    {
      name: "Фото",
      col: "col-span-2",
    },
    {
      name: "Товар",
      col: "col-span-3",
    },
    {
      name: "Размер",
      col: "col-span-2",
    },
    {
      name: "Количество",
      col: "col-span-3",
    },
    {
      name: "Цена",
      col: "col-span-2",
    },
  ];

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
        <h2 className="font-bold text-3xl mt-5">Разместить заказ</h2>
        <div className="grid grid-cols-12 items-start mt-5 mb-10 gap-x-5">
          <div className="col-span-12 md:col-span-8 ">
            <p className="font-semibold mb-2 text-xl">Адрес доставки</p>
            <p>Имя: Текст Текст Текст Текст Адрес</p>
            <p>Телефон: Текст Текст Текст Текст Адрес</p>
            <p>Город: Текст Текст Текст Текст Адрес</p>
            <p>Индекс: Текст Текст Текст Текст Адрес</p>
            <p>Страна: Текст Текст Текст Текст Адрес</p>
            <div className="border w-full my-5 border-[#E4E4E4]"></div>
            <p className="text-xl font-semibold">Спосос оплаты</p>
            <p>Оплата картой на сайте</p>
            <div className="border w-full my-5 border-[#E4E4E4]"></div>
            <p className="text-xl font-semibold mb-5 md:mb-0">Список товаров</p>
            <div className="hidden md:grid mb-5 grid-cols-12 gap-x-5 mt-5">
              {header.map((item, i) => (
                <div
                  className={`   w-full  font-semibold text-[18px] ${item.col}`}
                  key={i}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            {data.map((item, i) => (
              <>
                <OrderItemTable item={item} />
                <OrderItemCard item={item} />
              </>
            ))}
          </div>
          <div className="col-span-12 md:col-span-4 rounded-lg px-5 py-4 bg-white myshadow">
            <p className="text-xl font-semibold">Стоимость заказа</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <div className="flex items-center justify-between">
                <p>Товары:</p>
                <p>4190 Р</p>
              </div>
              <div className="flex items-center justify-between ">
                <p>Доставка:</p>
                <p>4190 Р</p>
              </div>
              <div className="flex items-center justify-between ">
                <p>Скидка 10%</p>
                <p>4190 Р</p>
              </div>
              <div className="flex items-center justify-between ">
                <p>Итого</p>
                <p className="text-main font-semibold text-xl">1 500 Р</p>
              </div>
            </div>
            <button className="w-full whitespace-nowrap text-white py-2 rounded-3xl mt-5 bg-main">
              <p className="font-semibold">Подтвердить</p>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
