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
