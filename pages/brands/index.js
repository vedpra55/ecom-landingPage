import { NavBar } from "../../components";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

export default function BrandsPage() {
  const data = [
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
  ];

  return (
    <main>
      <NavBar />
      <section className="myContainer mt-5 mb-10">
        <div className="flex gap-x-5 items-center">
          <p className="text-main underline">Главная</p>
          <AiOutlineRight />
          <p>Хлебные крошки</p>
        </div>
        <h2 className="font-bold text-3xl mt-5">Все бренды</h2>
        <div className="grid grid-cols-12 gap-5 mt-5 ">
          {data.map((item) => (
            <div
              className="relative w-full col-span-6 md:col-span-3 lg:col-span-3 h-20 md:h-36 bg-white shadow-md rounded-lg"
              key={item.imgUrl}
            >
              <Image
                className="w-full h-full object-contain px-5"
                fill
                sizes="30vh"
                alt="brands"
                src={item.imgUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
