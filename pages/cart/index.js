/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NavBar, Footer, Breadcrumbs } from "../../components";
import CartItemTable from "../../pageComponents/cart/cartItemTable";
import CartItemCard from "../../pageComponents/cart/cartItemCard";
import { useState } from "react";
import Modal from "../../components/Modal/modal";

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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <main>
      <NavBar />
      <section className="mt-[20px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        <p onClick={() => setIsOpen(true)} className=" cursor-pointer">
          Open Modal 1
        </p>
        <p onClick={() => setIsOpen2(true)} className=" cursor-pointer">
          Open Modal 2
        </p>
        <p onClick={() => setIsOpen3(true)} className=" cursor-pointer">
          Open Modal 3
        </p>
        <p onClick={() => setIsOpen4(true)} className=" cursor-pointer">
          Open Modal 4
        </p>
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
            className={` btnHover text-white md:w-[230px] md:ml-5 md:h-[50px] flex justify-center items-center whitespace-nowrap bg-main px-5 md:px-8 py-2 rounded-[90px]`}
          >
            <p>Оплатить заказ</p>
          </button>
        </div>
      </section>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
          <div className="flex justify-center">
            <p className="text-[32px]  font-bold">Регистрация</p>
          </div>
          <div className="flex flex-col gap-y-[15px] mt-[30px]">
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Ваше имя"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Фамилия"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Номер телефона"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="E-mail"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Индекс города"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Адрес"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Пароль"
              type={"text"}
            />
            <button
              className={` btnHover font-semibold  bg-main  w-full h-[55px] rounded-[90px] px-10 py-2 text-white`}
            >
              Часто задаваемые вопросы
            </button>
          </div>
        </div>
      </Modal>
      <Modal setIsOpen={setIsOpen2} isOpen={isOpen2}>
        <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
          <div className="flex justify-center">
            <p className="text-[32px]  font-bold">Вход</p>
          </div>
          <div className="flex flex-col gap-y-[15px] mt-[30px]">
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Ваше имя"
              type={"text"}
            />
            <input
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Пароль"
              type={"text"}
            />
            <button
              className={` btnHover font-semibold  bg-main  w-full h-[55px] rounded-[90px] px-10 py-2 text-white`}
            >
              Войти
            </button>
          </div>
        </div>
      </Modal>
      <Modal setIsOpen={setIsOpen3} isOpen={isOpen3}>
        <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
          <div className="flex justify-center">
            <p className="text-[32px]  font-bold">Данные получателя</p>
          </div>
          <div className="flex flex-col gap-y-[25px] mt-[30px]">
            <div>
              <label className="">Полное имя*</label>
              <input
                className="mt-[10px] h-[55px] accountInput"
                placeholder="Ваше имя"
                type={"text"}
              />
            </div>
            <div>
              <label className="">Адрес*</label>
              <input
                className="mt-[10px] h-[55px] accountInput"
                placeholder="ул. Название"
                type={"text"}
              />
            </div>
            <div>
              <label className="">Пвторите пароль</label>
              <input
                className=" mt-1  h-[55px] accountInput"
                placeholder="Пароль"
                type={"text"}
              />
            </div>
            <div>
              <label className="">Пароль</label>
              <input
                className=" mt-[10px]  h-[55px]  accountInput"
                placeholder="Пароль"
                type={"text"}
              />
            </div>
            <div>
              <label className="">Страна*</label>
              <input
                className=" mt-[10px]  h-[55px]  accountInput"
                placeholder="Страна"
                type={"text"}
              />
            </div>
            <div>
              <label className="">Телефон*</label>
              <input
                className=" mt-[10px]  h-[55px]  accountInput"
                placeholder="+7  ___ - __ - __"
                type={"text"}
              />
            </div>
            <button
              className={` btnHover font-semibold  bg-main  w-full h-[55px] rounded-[90px] px-10 py-2 text-white`}
            >
              Часто задаваемые вопросы
            </button>
          </div>
        </div>
      </Modal>
      <Modal setIsOpen={setIsOpen4} isOpen={isOpen4}>
        <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
          <div className="flex justify-center">
            <p className="text-[32px]  font-bold">Способ оплаты</p>
          </div>
          <div className="mt-[30px] flex gap-x-2 justify-between items-center">
            <div className="relative hover:bg-[#1C8BCA] cursor-pointer border border-[#E3E3E3] flex items-center justify-center rounded-[5px] w-[100px] h-[80px]">
              <img src="/assets/visa.png" className="w-[76px] h-[22px]" />
            </div>
            <div className="relative border hover:bg-[#1C8BCA] cursor-pointer border-[#E3E3E3] flex items-center justify-center rounded-[5px] w-[100px] h-[80px]">
              <img src="/assets/mastercard.png" className="w-[76px] h-[60px]" />
            </div>
            <div className="relative border hover:bg-[#1C8BCA] cursor-pointer border-[#E3E3E3] flex items-center justify-center rounded-[5px] w-[100px] h-[80px]">
              <img src="/assets/mastercard.png" className="w-[76px] h-[60px]" />
            </div>
            <div className="relative border hover:bg-[#1C8BCA] cursor-pointer border-[#E3E3E3] flex items-center justify-center rounded-[5px] w-[100px] h-[80px]">
              <img src="/assets/visa.png" className="w-[76px] h-[22px]" />
            </div>
          </div>
          <button
            className={`mt-[30px] font-semibold btnHover bg-main  w-full h-[55px] rounded-[90px] px-10 py-2 text-white`}
          >
            Оплатить заказ
          </button>
        </div>
      </Modal>
      <Footer />
    </main>
  );
}
