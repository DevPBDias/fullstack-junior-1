import HeroImage from "@/components/HeroImage";
import HeroServices from "@/components/HeroServices";
import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex flex-row">
      <section>
        <Navbar />
        <HeroText />
        <HeroServices />
      </section>
      <HeroImage />
    </main>
  );
}
