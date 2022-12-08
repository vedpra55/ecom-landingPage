import React from "react";

export default function ProfileEdit() {
  return (
    <div className="col-span-12 md:col-span-8">
      <h5 className="font-bold text-2xl mb-5">Профиль</h5>
      <form className="flex flex-col gap-y-5">
        <div>
          <label className="">Полное имя*</label>
          <input
            className=" mt-1  accountInput"
            placeholder="Ваше имя"
            type={"text"}
          />
        </div>
        <div>
          <label className="">Телефон*</label>
          <input
            className=" mt-1  accountInput"
            placeholder="+7  ___ - __ - __"
            type={"text"}
          />
        </div>
        <div>
          <label className="">E-mail</label>
          <input
            className=" mt-1  accountInput"
            placeholder="E-mail"
            type={"text"}
          />
        </div>
        <div>
          <label className="">Пароль</label>
          <input
            className=" mt-1  accountInput"
            placeholder="Пароль"
            type={"text"}
          />
        </div>
        <div>
          <label className="">Пвторите пароль</label>
          <input
            className=" mt-1  accountInput"
            placeholder="Пароль"
            type={"text"}
          />
        </div>
        <button className="flex justify-end">
          <div className="bg-main text-white px-20 py-2 rounded-3xl">
            Сохранить
          </div>
        </button>
      </form>
    </div>
  );
}
