import React from "react";

export default function OrderHistoryItemCard({ item }) {
  return (
    <div className="md:hidden w-full">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">ID</p>
          <p>{item.id}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Дата создания заказов</p>
          <p>{item.date}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Итоговая сумма</p>
          <p>{item.total}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Статус оплаты</p>
          <p>{item.paymentStatus}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Статус доставки</p>
          <p>{item.deliveryStatus}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Действия</p>
          <p>{item.action}</p>
        </div>
      </div>
      <div className="md:hidden border w-full my-3"></div>
    </div>
  );
}
