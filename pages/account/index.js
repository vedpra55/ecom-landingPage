import React from "react";
import { useState } from "react";
import { NavBar, Footer, Breadcrumbs } from "../../components";
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
      <section className="mt-5 mb-[30px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        <div className="grid mt-5 grid-cols-12 gap-y-10 md:gap-x-10 3xl:gap-x-28 items-start">
          <div className="col-span-12 md:col-span-4 3xl:col-span-3 bg-white w-full h-[105px] lg:w-[300px] flex flex-col justify-center rounded-lg myshadow">
            {tabList.map((item, i) => (
              <>
                <p
                  onClick={() => setSelectedTab(i)}
                  key={i}
                  className={`px-5 text-[20px] cursor-pointer ${
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
