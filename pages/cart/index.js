import { NavBar, Footer, Breadcrumbs } from "../../components";
import CartItemTable from "../../pageComponents/cart/cartItemTable";
import CartItemCard from "../../pageComponents/cart/cartItemCard";
import { useState } from "react";

export default function CartPage() {
  const header = [
    {
      name: "Фото",
      col: "col-span-1",
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
      col: "col-span-2",
    },
    {
      name: "Цена",
      col: "col-span-2",
    },
    {
      name: "Всего",
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
        <h3 className="font-bold text-3xl mt-[30px]">Корзина</h3>
        <div className="hidden md:grid grid-cols-12 mt-[20px] gap-x-5">
          {header.map((item, i) => (
            <div
              className={`   w-full  font-semibold text-[18px] ${item.col}`}
              key={i}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="border w-full my-[20px] border-[#979797]"></div>
        {data.map((item, i) => (
          <>
            <CartItemTable key={i} item={item} />
            <CartItemCard key={i} item={item} />
          </>
        ))}
        <div className="flex justify-end gap-x-3 sm:gap-x-5 items-center mb-[95px]">
          <p className="text-[14px] text-[#303030] whitespace-nowrap">
            Всего к оплате:
          </p>
          <p className=" font-semibold md:text-xl text-main whitespace-nowrap">
            1 500 ₽
          </p>
          <button
            onClick={handleClick}
            className={`${
              clicked ? "btnClicked" : "btnHover"
            }  text-white md:w-[230px] md:ml-5 md:h-[50px] flex justify-center items-center whitespace-nowrap bg-main px-5 md:px-8 py-2 rounded-[90px]`}
          >
            <p>Оплатить заказ</p>
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
