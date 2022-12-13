import { NavBar, Footer, Breadcrumbs } from "../../components";
import Clients from "../../pageComponents/admin/clients";
import AdminPanal from "../../pageComponents/admin/adminPanal";
import EditClient from "../../pageComponents/admin/editClient";
import PurchaseHistory from "../../pageComponents/admin/purchaseHistory";
import { useState } from "react";

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabList = [
    {
      name: "Админ панель",
      component: <AdminPanal />,
    },
    {
      name: "Заказы",
      component: <PurchaseHistory />,
    },
    {
      name: "Товары",
      component: <Clients />,
    },
    {
      name: "Клиенты",
      component: <EditClient />,
    },
  ];

  return (
    <main>
      <NavBar />
      <section className="mt-5 mb-20 myContainer">
        <Breadcrumbs text="Хлебные крошки" />
        <div className="grid mt-[30px] grid-cols-12 gap-y-10 md:gap-x-5 xl:gap-x-0 3xl:gap-x-28 items-start">
          <div className="col-span-12 md:col-span-4 3xl:col-span-3 bg-white w-full h-[225px] xl:w-[300px] py-[15px] rounded-lg myshadow">
            {tabList.map((item, i) => (
              <>
                <p
                  onClick={() => setSelectedTab(i)}
                  key={i}
                  className={`px-5  hover:text-main text-[20px] cursor-pointer ${
                    i === selectedTab && "font-semibold"
                  }`}
                >
                  {item.name}
                </p>
                {i !== 3 && (
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
