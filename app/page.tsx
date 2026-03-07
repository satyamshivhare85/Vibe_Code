"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";
import { Header } from "@/features/home/components/header";
import { Footer } from "react-day-picker";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const text = `VibeCode Editor is an AI-powered development environment built for modern creators. 
Experience intelligent code suggestions, real-time debugging insights, and seamless workflow automation — 
all designed to help you build faster, smarter, and with absolute precision.`;

const [displayedText, setDisplayedText] = useState("");

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    setDisplayedText(text.slice(0, i));
    i++;
    if (i > text.length) clearInterval(interval);
  }, 25); // speed control (lower = faster)

  return () => clearInterval(interval);
}, []);
  return (
 <>

    <Header/>
    
    {/* <UserButton/>
      <h1 className="text-3xl font-bold text-rose-500 underline">
      Hello world!
    </h1> */}

       <div className=" z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      
      <div className="flex flex-col justify-center items-center my-5">
      <Image src={"/hero.svg"} alt="Hero-Section" height={500}  width={500}/>
      
      <h1 className=" z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 tracking-tight leading-[1.3] ">
        Vibe Code With with Intelligence
      </h1>
      </div>
     

      {/* <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
      VibeCode Editor is an AI-powered development environment built for modern creators. 
Experience intelligent code suggestions, real-time debugging insights, and seamless workflow automation — 
all designed to help you build faster, smarter, and with absolute precision.
      </p> */}
      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
  {displayedText}
  <span className="animate-pulse">|</span>
</p>

      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
    <Footer/>
 </>
  );
}
