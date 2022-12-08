import React from "react";

export default function CategoryBar() {
  const data = [
    {
      name: "Главная                                                                                                           ",
    },
    {
      name: "Каталог товаров",
    },
    {
      name: "Бренды",
    },
    {
      name: "Часто задаваемые вопросы ",
    },
    {
      name: "Контакты",
    },
  ];

  return (
    <section className="bg-[#181818] py-2">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-x-10 md:gap-0 text-xs md:text-[16px] gap-y-1 md:justify-between items-center myContainer">
        {data.map((item) => (
          <div key={item.name}>
            <p className="text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
