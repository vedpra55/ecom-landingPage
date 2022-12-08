import React from "react";

export default function OrderHistoryItemTable({ item }) {
  return (
    <>
      <div className="hidden md:grid grid-cols-12  gap-x-5">
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.id}
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.date}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.total}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.paymentStatus}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.deliveryStatus}
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-[10px] pl-5 lg:text-[13px] whitespace-nowrap">
            {item.action}
          </p>
        </div>
      </div>
      <div className="hidden md:block border w-full my-3"></div>
    </>
  );
}
