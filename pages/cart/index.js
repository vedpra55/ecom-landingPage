import { NavBar, Footer } from "../../components";
import {
  AiOutlineRight,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";
import Image from "next/image";
import CartItemTable from "../../pageComponents/cart/cartItemTable";
import CartItemCard from "../../pageComponents/cart/cartItemCard";

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

  return (
    <main>
      <NavBar />
      <section className="my-5 myContainer">
        <div className="flex gap-x-5 items-center">
          <p className="text-main underline">Главная</p>
          <AiOutlineRight />
          <p>Хлебные крошки</p>
        </div>
        <h3 className="font-bold text-3xl mt-5">Корзина</h3>

        <div className="hidden md:grid grid-cols-12 mt-5 gap-x-10">
          {header.map((item, i) => (
            <div
              className={`   w-full  font-semibold text-[18px] ${item.col}`}
              key={i}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="border w-full my-5 border-[#979797]"></div>

        {data.map((item, i) => (
          <>
            <CartItemTable item={item} />
            <CartItemCard item={item} />
          </>
        ))}

        <div className="flex justify-end gap-x-5 items-center mb-10">
          <p className="text-[14px] text-[#303030] whitespace-nowrap">
            Всего к оплате:
          </p>
          <p className=" font-semibold md:text-xl text-main whitespace-nowrap">
            1 500 ₽
          </p>
          <button className="text-white whitespace-nowrap bg-main px-5 md:px-8 py-2 rounded-3xl">
            <p>Оплатить заказ</p>
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
