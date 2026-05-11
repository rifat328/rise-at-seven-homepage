"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconMarquee from "@/components/IconMarquee";
export default function Home() {
  return (
    <main className="font-saans min-h-screen flex flex-col">
      <div className="relative h-3.5 mx-2.5 mt-2.5 mb-4 shrink-0">
        <Button classStyle="w-full bg-[#AAF0D1] text-grey-900 py-2 px-5 text-sm font-semibold text-balance tracking-tight leading-none | lg:text-sm |">
          🚨 The Category Leaderboard - Live Now
        </Button>
      </div>
      <Header />
      {/* Hero Content */}
      <Hero />
      {/* Marque loop  */}
      <div className="px-2">
        <IconMarquee />
      </div>
    </main>
  );
}
