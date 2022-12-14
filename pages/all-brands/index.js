import React from "react";

import { NavBar, Footer, Breadcrumbs } from "../../components";
import { AiOutlinePlus } from "react-icons/ai";

export default function AllBrandsPage() {
  return (
    <main>
      <NavBar />
      <section className="myContainer mt-[20px]">
        <Breadcrumbs text={"Хлебные крошки"} />
        <div className="mt-[30px]">
          <h1 className="font-bold text-3xl">Все бренды</h1>
          <div className="mt-5 grid grid-cols-12 gap-x-5 flex-wrap md:gap-x-[40px] gap-y-5 items-center">
            {Array.from(Array(12)).map((item, i) => (
              <div
                key={i}
                className=" cardHover cursor-pointer col-span-12 md:col-span-6 px-5 md:px-[30px] h-[60px] w-full 3xl:w-[580px] flex justify-between items-center myshadow bg-white rounded-[5px]"
              >
                <p className="font-medium md:text-[18px]">
                  Часто задаваемые вопросы ?
                </p>
                <div className="bg-main btnHover cursor-pointer rounded-full  w-[24px] h-[24px] flex justify-center items-center">
                  <AiOutlinePlus className="text-xl text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
