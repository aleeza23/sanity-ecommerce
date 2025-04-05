import Categories from "@/features/Categories";
import HeroSection from "@/features/Hero";
import { Navbar } from "@/features/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
    </>
  );
}
