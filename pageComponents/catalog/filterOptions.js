import React from "react";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function FilterOptions({ showFilter }) {
  const data = [
    {
      name: "Бренд",
      options: [
        "Пример текста ",
        "Название бренда",
        "Пример",
        "Текст фильтра",
        "Размер например",
        "Страна",
        "Еще что то",
        "Пример текста",
      ],
    },
    {
      name: "Бренд",
      options: [
        "Пример текста ",
        "Название бренда",
        "Пример",
        "Текст фильтра",
        "Размер например",
        "Страна",
        "Еще что то",
        "Пример текста",
      ],
    },
    {
      name: "Бренд",
      options: [
        "Пример текста ",
        "Название бренда",
        "Пример",
        "Текст фильтра",
        "Размер например",
        "Страна",
        "Еще что то",
        "Пример текста",
      ],
    },
    {
      name: "Бренд",
      options: [
        "Пример текста ",
        "Название бренда",
        "Пример",
        "Текст фильтра",
        "Размер например",
        "Страна",
        "Еще что то",
        "Пример текста",
      ],
    },
  ];

  return (
    <section
      className={` ${
        showFilter ? "" : "hidden md:flex"
      } col-span-12 md:col-span-4 lg:col-span-3 flex flex-col mb-10`}
    >
      <div className=" bg-[#F0F0F0] w-full py-5  flex justify-center">
        <p className="font-medium text-[18px]">Фильтры</p>
      </div>
      {data.map((item, i) => (
        <div className="mt-5 " key={i}>
          <div className="px-5 flex justify-between">
            <p className="font-medium">{item.name}</p>
            {i === 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          </div>
          {i === 0 && (
            <div className="px-5 mt-3">
              {item.options.map((item, i) => (
                <div key={i} className="py-1 flex gap-x-3 items-center">
                  <input type={"checkbox"} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          <div className="w-full border mt-3 border-[#D0D0D0]"></div>
        </div>
      ))}
      <div className="flex justify-center mt-5 py-5 w-full border  border-[#898989] rounded-lg">
        <p className="text-[#898989]">Сбросить фильтры</p>
      </div>
    </section>
  );
}
