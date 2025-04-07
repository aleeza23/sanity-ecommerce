import Categories from "@/features/Categories";
import FooterSection from "@/features/Footer";
import HeroSection from "@/features/Hero";
import { Navbar } from "@/features/Navbar";
import Products from "@/features/Products";
import ShareSetup from "@/features/ShareSetup";

export const revalidate = 3
export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <Products />
      <ShareSetup />
      <FooterSection />
    </>
  );
}
