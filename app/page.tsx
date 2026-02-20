"use client";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";
import Image from "next/image";

export default function Home() {
  return (
 <>
  <h1 className="text-3xl font-bold text-rose-500 underline">
      Hello world!
    </h1>
    
    <UserButton/>
 </>
  );
}
