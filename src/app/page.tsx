import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { BrandSplash } from "@/components/BrandSplash";
import { Services } from "@/components/Services";
import { House } from "@/components/House";
import { Branches } from "@/components/Branches";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <BrandSplash />
        <Services />
        <House />
        <Branches />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
