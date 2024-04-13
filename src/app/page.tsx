import HeroImage from "@/components/HeroImage";
import HeroServices from "@/components/HeroServices";
import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";
import ScrollArrow from "@/components/ScrollArrow";

export default function Home() {
  return (
    <main className="relative h-screen">
      <section>
        <Navbar />
        <HeroText />
      </section>
      <HeroImage />
      <HeroServices />
      <ScrollArrow />
    </main>
  );
}
