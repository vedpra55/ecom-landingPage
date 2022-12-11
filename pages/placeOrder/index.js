import { useState } from "react";
import { NavBar, Footer, Breadcrumbs } from "../../components";
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

  const [clicked, setClicked] = useState(null);

  function handleClick() {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1500);
  }

  return (
    <main>
      <NavBar />
      <section className="mt-[20px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        <h2 className="font-bold text-3xl mt-[30px]">Разместить заказ</h2>
        <div className="grid grid-cols-12 items-start mt-5 mb-10 gap-x-5">
          <div className="col-span-12 md:col-span-8 ">
            <p className="font-semibold mb-[10px] text-xl">Адрес доставки</p>
            <p>Имя: Текст Текст Текст Текст Адрес</p>
            <p>Телефон: Текст Текст Текст Текст Адрес</p>
            <p>Город: Текст Текст Текст Текст Адрес</p>
            <p>Индекс: Текст Текст Текст Текст Адрес</p>
            <p>Страна: Текст Текст Текст Текст Адрес</p>
            <div className="border w-full my-[30px] border-[#E4E4E4]"></div>
            <p className="text-xl font-semibold">Спосос оплаты</p>
            <p className="mt-[10px]">Оплата картой на сайте</p>
            <div className="border w-full my-5 border-[#E4E4E4]"></div>
            <p className="text-xl font-semibold mb-[10px] md:mb-0">
              Список товаров
            </p>
            <div className="hidden md:grid mb-5 grid-cols-12 gap-x-5 mt-[10px]">
              {header.map((item, i) => (
                <div
                  className={`w-full  font-semibold text-[18px] ${item.col}`}
                  key={i}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            {data.map((item, i) => (
              <>
                <OrderItemTable key={i} item={item} />
                <OrderItemCard key={i} item={item} />
              </>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 w-full py-5 lg:w-[350px] lg:h-[311px] rounded-lg flex flex-col justify-center px-[20px] bg-white myshadow">
            <p className="text-[22px] font-semibold">Стоимость заказа</p>
            <div className="flex flex-col gap-y-3 pt-5">
              <div className="flex text-[20px] items-center justify-between">
                <p>Товары:</p>
                <p>4190 Р</p>
              </div>
              <div className="flex text-[20px] items-center justify-between ">
                <p>Доставка:</p>
                <p>4190 Р</p>
              </div>
              <div className="flex text-[20px] items-center justify-between ">
                <p>Скидка 10%</p>
                <p>4190 Р</p>
              </div>
              <div className="flex text-[20px] items-center justify-between ">
                <p>Итого</p>
                <p className="text-main font-semibold text-[24px]">1 500 Р</p>
              </div>
            </div>
            <button
              onClick={handleClick}
              className={` ${
                clicked ? "btnClicked" : "btnHover"
              } w-full  lg:w-[305px] py-2 lg:h-[44px] whitespace-nowrap text-white rounded-3xl mt-5 bg-main`}
            >
              <p className="font-semibold">Подтвердить</p>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
