import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import OrderHistoryItemCard from "./orderHistoryItemCard";
import OrderHistoryItemTable from "./orderHistoryItemTable";

export default function OrderHistory() {
  const header = [
    {
      name: "ID",
      col: "col-span-1",
    },
    {
      name: "Дата создания заказов",
      col: "col-span-3",
    },
    {
      name: "Итоговая сумма",
      col: "col-span-2",
    },
    {
      name: "Статус оплаты",
      col: "col-span-2",
    },
    {
      name: "Статус доставки",
      col: "col-span-2",
    },
    {
      name: "Действия",
      col: "col-span-1",
    },
  ];

  const data = [
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-8 w-full">
      <h2 className="font-bold text-2xl mb-3">История заказов</h2>
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
      <div className="hidden md:grid grid-cols-12 gap-x-5 mt-5">
        {header.map((item, i) => (
          <div key={item.name} className={`${i === 5 && "pl-5"}  ${item.col}`}>
            <p className="text-[10px] lg:text-[13px] whitespace-nowrap font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="border w-full my-3"></div>
      {data.map((item, i) => (
        <>
          <OrderHistoryItemTable item={item} />
          <OrderHistoryItemCard item={item} />
        </>
      ))}
    </div>
  );
}
