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
    <section className="bg-[#181818] h-[65px]">
      <div className="w-full h-full flex flex-wrap md:flex-nowrap justify-between gap-x-10 md:gap-0 text-xs md:text-[20px] cursor-pointer  gap-y-1 md:justify-between items-center myContainer">
        {data.map((item) => (
          <div key={item.name}>
            <p className="text-white hover:text-main">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
