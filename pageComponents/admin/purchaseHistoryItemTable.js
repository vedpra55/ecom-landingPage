import React from "react";

export default function PurchaseHistoryItemTable({ item }) {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-12  gap-x-2">
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.id}
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.Client}
          </p>
        </div>
        <div className="col-span-2 pl-5">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.orderDate}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.total}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.paymentState}
          </p>
        </div>

        <div className="col-span-3">
          <p className="text-[10px] lg:text-[13px] ">{item.orderStatus}</p>
        </div>
        <div className="col-span-1">
          <p className="text-[10px] text-main underline  lg:text-[13px] whitespace-nowrap">
            {item.Actions}
          </p>
        </div>
      </div>
      <div className="border w-full my-3"></div>
    </div>
  );
}
