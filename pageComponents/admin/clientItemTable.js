import React from "react";

export default function ClientItemTable({ item }) {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.id}
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.name}
          </p>
        </div>
        <div className="col-span-4">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.email}
          </p>
        </div>
        <div className="col-span-4 flex gap-x-2">
          <p className="text-[10px] md:w-[120px] md:h-[35px] flex items-center justify-center bg-main text-white rounded-[90px] px-5 py-1 lg:text-[13px] whitespace-nowrap">
            Действие
          </p>
          <p className="text-[10px] md:w-[120px] nd:h-[35px] flex items-center justify-center bg-main text-white rounded-[90px] px-5 py-1 lg:text-[13px] whitespace-nowrap">
            Действие
          </p>
        </div>
      </div>
      <div className="border w-full my-3"></div>
    </div>
  );
}
