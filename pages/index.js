import BestSellingProducts from "../components/bestSellingProducts";
import Brands from "../components/brands";
import CategoryBar from "../components/categoryBar";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import Hero from "../components/hero";
import InMagzine from "../components/inMagzine";
import NavBar from "../components/navBar";
import PopularProducts from "../components/popularProducts";
import TopCategories from "../components/topCategories";
import TopHeading from "../components/topHeading";

export default function Home() {
  return (
    <main>
      <TopHeading />
      <NavBar />
      <CategoryBar />
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
