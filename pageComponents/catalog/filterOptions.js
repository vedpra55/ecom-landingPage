import React, { useState } from "react";

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
      } col-span-12 md:col-span-4 lg:col-span-3 flex  flex-col mb-10`}
    >
      <div className=" bg-[#F0F0F0] w-full  h-[56px] items-center  flex justify-center">
        <p className="font-medium text-[18px]">Фильтры</p>
      </div>
      <OptionsList item={data[0]} />
      <OptionsList item={data[1]} />
      <OptionsList item={data[3]} />

      <button className="flex justify-center mt-5 h-[45px]   items-center w-full border  border-[#898989] rounded-lg">
        <p className="text-[#898989]">Сбросить фильтры</p>
      </button>
    </section>
  );
}

function OptionsList({ item }) {
  const [isOptions, setOptions] = useState(false);
  return (
    <div className="mt-5 ">
      <div className="px-5 flex justify-between">
        <p className="font-medium">{item.name}</p>
        {isOptions ? (
          <AiOutlineArrowUp
            className=" cursor-pointer"
            onClick={() => setOptions(false)}
          />
        ) : (
          <AiOutlineArrowDown
            className=" cursor-pointer"
            onClick={() => setOptions(true)}
          />
        )}
      </div>
      {isOptions && (
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
  );
}
