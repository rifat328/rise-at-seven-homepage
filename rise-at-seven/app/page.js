"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { MoveUpRight } from "lucide-react";
export default function Home() {
  return (
    <main className="font-saans min-h-screen">
      <div className="">
        <Button classStyle=" z-[60] w-full bg-[#AAF0D1] text-grey-900 py-2 px-5 text-sm font-semibold border-mint text-balance  tracking-tight leading-none font-semibold  | lg:text-sm |">
          🚨 The Category Leaderboard - Live Now
        </Button>
      </div>
      <Header />
      <h1 className="font-saans text-4xl font-medium leading-none text-foreground mt-80">
        <Button href="#" classStyle="py-2 px-4 flex items-center text-2xl">
          Get In Touch{<MoveUpRight size={16} />}
        </Button>
      </h1>
    </main>
  );
}
