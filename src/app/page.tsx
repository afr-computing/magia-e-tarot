'use client'

import { About } from "@/app/components/About";
import { Footer } from "@/app/components/Footer";
import { HeaderMenu } from "@/app/components/HeaderMenu";
import { Hero } from "@/app/components/Hero";
/* import { Reviews } from "@/app/components/Reviews"; */

export default function Home() {

  return (
    <main>
      <HeaderMenu />
      <Hero />
      <About />
{/*       <Reviews /> */}
      <Footer />
    </main>
  );
}
