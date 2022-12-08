import React from "react";

export default function PurchaseHistoryItemCard({ item }) {
  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">ID</p>
          <p>{item.id}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Клиент</p>
          <p>{item.Client}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Дата создания заказа</p>
          <p>{item.orderDate}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Вся сумма</p>
          <p>{item.total}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Статус оплаты</p>
          <p>{item.paymentState}</p>
        </div>
        <div className="flex justify-between gap-x-5 flex-wrap gap-y-2 items-start">
          <p className="font-semibold">Статус заказа</p>
          <p>{item.orderStatus}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Действия</p>
          <p className="underline text-main">{item.Actions}</p>
        </div>
      </div>
      <div className="md:hidden border w-full my-3"></div>
    </div>
  );
}
