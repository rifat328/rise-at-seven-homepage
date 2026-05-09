"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="font-saans min-h-screen">
      <div className="relative  h-14  m-2.5">
        <Button classStyle="  w-full bg-[#AAF0D1] text-grey-900 py-2 px-5 text-sm font-semibold  text-balance  tracking-tight leading-none font-semibold  | lg:text-sm |">
          🚨 The Category Leaderboard - Live Now
        </Button>
      </div>
      <Header />

      {/* Hero Content */}
      <Hero />
    </main>
  );
}
