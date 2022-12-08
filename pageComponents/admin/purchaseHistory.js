import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PurchaseHistoryItemCard from "./purchaseHistoryItemCard";
import PurchaseHistoryItemTable from "./purchaseHistoryItemTable";

export default function PurchaseHistory() {
  const header = [
    {
      name: "ID",
      col: "col-span-1",
    },
    {
      name: "Клиент",
      col: "col-span-1",
    },
    {
      name: "Дата создания заказа",
      col: "col-span-2",
    },
    {
      name: "Вся сумма",
      col: "col-span-2",
    },
    {
      name: "Статус оплаты",
      col: "col-span-2",
    },
    {
      name: "Статус заказа",
      col: "col-span-3",
    },
    {
      name: "Действия",
      col: "col-span-1",
    },
  ];

  const data = [
    {
      id: "2432",
      Client: "Клиент",
      orderDate: "11.11.2022",
      total: "2 423 Р",
      paymentState: "Статус",
      orderStatus:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit.",
      Actions: "Детали",
    },
    {
      id: "2432",
      Client: "Клиент",
      orderDate: "11.11.2022",
      total: "2 423 Р",
      paymentState: "Статус",
      orderStatus:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit.",
      Actions: "Детали",
    },
    {
      id: "2432",
      Client: "Клиент",
      orderDate: "11.11.2022",
      total: "2 423 Р",
      paymentState: "Статус",
      orderStatus:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit.",
      Actions: "Детали",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-8">
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
      <div className="hidden md:grid grid-cols-12 gap-x-2  mt-5">
        {header.map((item, i) => (
          <div key={i} className={`${i === 2 && "pl-5"}  ${item.col}`}>
            <p className="text-[10px] lg:text-[13px] whitespace font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="border w-full my-3"></div>
      {data.map((item, i) => (
        <>
          <PurchaseHistoryItemTable key={i} item={item} />
          <PurchaseHistoryItemCard key={i} item={item} />
        </>
      ))}
    </div>
  );
}
