import React, { useState } from "react";

export default function ProfileEdit() {
  const [clicked, setClicked] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    setClicked(true);

    setTimeout(() => {
      setClicked(null);
    }, 1500);
  }

  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h5 className="font-bold text-2xl mb-5">Профиль</h5>
      <form className="flex flex-col gap-y-[25px]">
        <div>
          <label className="">Полное имя*</label>
          <input
            className=" mt-[10px] h-[55px] accountInput"
            placeholder="Ваше имя"
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
        <div>
          <label className="">E-mail</label>
          <input
            className=" mt-[10px]  h-[55px]  accountInput"
            placeholder="E-mail"
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
          <label className="">Пвторите пароль</label>
          <input
            className=" mt-1  h-[55px] accountInput"
            placeholder="Пароль"
            type={"text"}
          />
        </div>
        <button onClick={handleClick} className="flex justify-end">
          <div
            className={`${
              clicked ? "btnClicked" : "btnHover"
            } bg-main text-white lg:w-[305px] lg:h-[55px] flex justify-center items-center px-20 py-2 rounded-[90px]`}
          >
            Сохранить
          </div>
        </button>
      </form>
    </div>
  );
}
