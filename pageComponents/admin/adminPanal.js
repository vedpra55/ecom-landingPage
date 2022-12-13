import React, { useState } from "react";

import { ChartMy } from "./chart";

export default function AdminPanal() {
  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h2 className="font-bold text-2xl mb-5">Админ панель</h2>
      <div className="flex gap-x-8 flex-wrap gap-y-5">
        <div className="flex items-center gap-x-3">
          <p>c</p>
          <div className="border rounded-3xl px-8 py-2">28.10.2022</div>
        </div>
        <div className="flex items-center gap-x-3">
          <p>c</p>
          <div className="border rounded-3xl px-8 py-2">28.10.2022</div>
          <button
            className={`btnHover w-[170px] h-[50px] rounded-3xl text-white bg-main py-2 px-8`}
          >
            Показать
          </button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-1">
        {Array.from(Array(4)).map((item, i) => (
          <div
            key={i}
            className=" btnHover cursor-pointer 3xl:w-[210px] h-[110px] flex flex-col justify-center px-3 md:col-span-3 col-span-6 py-3 text-white adminPanalCard rounded-md shadow-lg"
          >
            <p className="font-bold text-[14px]">Показатель какой то</p>
            <div className="flex gap-x-3 mt-2 items-end">
              <p className="text-4xl font-bold">80</p>
              <p>чего то</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 w-full">
        <ChartMy />
      </div>
    </div>
  );
}
