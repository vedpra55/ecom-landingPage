import React from "react";
import { useState } from "react";
import { NavBar, Footer } from "../../components";
import { AiOutlineRight } from "react-icons/ai";
import ProfileEdit from "../../pageComponents/account/profileEdit";
import OrderHistory from "../../pageComponents/account/orderHistory";

export default function AccountPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabList = [
    {
      name: "Профиль",
      component: <ProfileEdit />,
    },
    {
      name: "История заказво",
      component: <OrderHistory />,
    },
  ];

  return (
    <main>
      <NavBar />
      <section className="mt-5 mb-20 myContainer">
        <div className="flex gap-x-5 items-center">
          <p className="text-main underline">Главная</p>
          <AiOutlineRight />
          <p>Хлебные крошки</p>
        </div>
        <div className="grid mt-5 grid-cols-12 gap-y-5 md:gap-x-10 items-start">
          <div className="col-span-12 md:col-span-4 bg-white w-full py-5 rounded-lg myshadow">
            {tabList.map((item, i) => (
              <>
                <p
                  onClick={() => setSelectedTab(i)}
                  key={i}
                  className={`px-5 cursor-pointer ${
                    i === selectedTab && "font-semibold"
                  }`}
                >
                  {item.name}
                </p>
                {i !== 1 && (
                  <div className="my-3 border-[#E4E4E4] border-[1px] w-full"></div>
                )}
              </>
            ))}
          </div>
          {tabList[selectedTab].component}
        </div>
      </section>
      <Footer />
    </main>
  );
}
