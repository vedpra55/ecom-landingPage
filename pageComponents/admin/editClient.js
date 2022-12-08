import React from "react";

export default function EditClient() {
  return (
    <div className="col-span-12 md:col-span-8">
      <h2 className="font-bold text-2xl mb-5">
        Редактирование клиента 3407762
      </h2>
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

        <div className="flex gap-x-5 justify-between items-start">
          <div className="flex items-center gap-x-3">
            <input className=" border-[#ABABAB]" type={"checkbox"} />
            <p>Пользователь является админом</p>
          </div>
          <button className="bg-main whitespace-nowrap text-white px-8 md:px-20  py-2 rounded-3xl">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}
