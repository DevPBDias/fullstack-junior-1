import HeroImage from "@/components/HeroImage";
import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-row">
      <section>
        <Navbar />
        <HeroText />
      </section>
      <HeroImage />
    </main>
  );
}
