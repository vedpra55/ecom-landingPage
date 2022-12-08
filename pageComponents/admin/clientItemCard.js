import React from "react";

export default function ClientItemCard({ item }) {
  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">ID</p>
          <p>{item.id}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Имя</p>
          <p>Имя Пользователя</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">E-mail</p>
          <p>2 423 Р</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Действия</p>
          <div className="flex gap-x-2">
            <button className="text-white text-[14px] bg-main font-semibold px-3 py-1 rounded-2xl">
              Действие
            </button>
            <button className="text-white text-[14px] bg-main font-semibold px-3 py-1 rounded-2xl">
              Действие
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden border w-full my-3"></div>
    </div>
  );
}
