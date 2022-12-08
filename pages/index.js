// Page Components
import BestSellingProducts from "../pageComponents/home/bestSellingProducts";
import Brands from "../pageComponents/home/brands";
import Hero from "../pageComponents/home/hero";
import InMagzine from "../pageComponents/home/inMagzine";
import PopularProducts from "../pageComponents/home/popularProducts";
import TopCategories from "../pageComponents/home/topCategories";

// Components
import { NavBar, ContactUs, Footer } from "../components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <TopCategories />
      <PopularProducts />
      <BestSellingProducts />
      <ContactUs />
      <Brands />
      <InMagzine />
      <Footer />
    </main>
  );
}
