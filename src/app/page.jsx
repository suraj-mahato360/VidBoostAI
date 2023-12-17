"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {

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
