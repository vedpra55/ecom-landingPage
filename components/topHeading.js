import React from "react";

import { FaPhoneVolume, FaUser } from "react-icons/fa";

export default function TopHeading() {
  const data = [
    {
      name: "Заказать звонок",
      icon: <FaPhoneVolume />,
    },
    {
      name: "Личный кабинет",
      icon: <FaUser />,
    },
  ];

  return (
    <section className={`bg-[#E4E4E4] w-full py-2`}>
      <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap  items-center myContainer text-[14px] lg:text-[16px]">
        <div>
          <p>Какой то краткий лозунг о чем магазин</p>
        </div>
        <div className="flex items-center gap-x-10">
          {data.map((item) => (
            <div
              className="flex  items-center gap-x-2 lg:gap-x-4"
              key={item.name}
            >
              <p>{item.name}</p>
              <div className="bg-[#636679] text-white rounded-full p-2 text-xs lg:text-[14px]">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
