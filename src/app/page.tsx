'use client'

import { HeaderMenu } from "@/app/components/HeaderMenu";
import { Hero } from "@/app/components/Hero";
import { Reviews } from "@/app/components/Reviews";

export default function Home() {

  return (
    <div>
      <HeaderMenu />
      <Hero />
      <Reviews />
    </div>
  );
}
