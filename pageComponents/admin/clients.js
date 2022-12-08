import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ClientItemCard from "./clientItemCard";
import ClientItemTable from "./clientItemTable";

export default function Clients() {
  const header = [
    {
      name: "ID",
      col: "col-span-1",
    },
    {
      name: "Имя",
      col: "col-span-3",
    },
    {
      name: "E-mail",
      col: "col-span-4",
    },
    {
      name: "Действия",
      col: "col-span-4",
    },
  ];

  const data = [
    {
      id: "2432",
      name: "Имя Пользователя",
      email: "2 423 Р",
    },
    {
      id: "2432",
      name: "Имя Пользователя",
      email: "2 423 Р",
    },
    {
      id: "2432",
      name: "Имя Пользователя",
      email: "2 423 Р",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-8">
      <h2 className="font-bold text-2xl mb-3">Клиенты</h2>
      <div className="relative">
        <input
          className="accountInput "
          placeholder="Поиск заказа"
          type="text"
        />
        <div className="text-xl flex items-center absolute  right-5 bottom-3  text-main ">
          <AiOutlineSearch />
        </div>
      </div>
      <div className=" hidden md:grid grid-cols-12 gap-x-5 mt-5">
        {header.map((item, i) => (
          <div key={item.name} className={`${i === 3 && "pl-16"}  ${item.col}`}>
            <p className="text-[10px] lg:text-[13px] whitespace-nowrap font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="border w-full my-3"></div>
      {data.map((item, i) => (
        <>
          <ClientItemTable key={i} item={item} />
          <ClientItemCard key={i} item={item} />
        </>
      ))}
    </div>
  );
}
