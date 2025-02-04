'use client'

import { About } from "@/app/components/About";
import { Footer } from "@/app/components/Footer";
import { HeaderMenu } from "@/app/components/HeaderMenu";
import { Works } from "@/app/components/Works";

export default function Home() {

  return (
    <main>
      <HeaderMenu />
      <About />
      <Works />
      <Footer />
    </main>
  );
}
