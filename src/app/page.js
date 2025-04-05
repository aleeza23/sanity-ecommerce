import Categories from "@/features/Categories";
import HeroSection from "@/features/Hero";
import { Navbar } from "@/features/Navbar";

export const revalidate = 30
export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
    </>
  );
}
