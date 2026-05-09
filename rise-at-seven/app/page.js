"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="font-saans min-h-screen">
      <div className="relative w-full h-14 z-60">
        <Button classStyle=" z-[60] w-full bg-[#AAF0D1] text-grey-900 py-2 px-5 text-sm font-semibold border-mint text-balance  tracking-tight leading-none font-semibold  | lg:text-sm |">
          🚨 The Category Leaderboard - Live Now
        </Button>
      </div>
      <Header />

      {/* Hero Content */}
      <section className="pt-32">
        <h1 className="text-7xl font-bold">The Hero Section</h1>
        <p className="mt-10 text-xl max-w-2xl">
          Scroll down to see the banner disappear and the header move up to the
          top!
        </p>
        <div className="h-[200vh]" /> {/* Just for scrolling room */}
      </section>
    </main>
  );
}
