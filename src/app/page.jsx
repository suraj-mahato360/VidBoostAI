"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { vidGenData } from "@/api";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    vidGenData().then((data) => setData(data));
  }, []);

  // console.log(data);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Features />
        <Pricing />
      </div>
    </div>
  );
}
