import React from "react";
import ShineBorder from "@/components/ui/shine-border";
import { RainbowButton } from "@/components/ui/rainbow-button";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";

const Hero = () => {
  return (
  <>
  <br /><br /><br />
    <ShineBorder
         className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
         color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
       ><HyperText
       className="text-4xl font-bold text-black dark:text-white"
       text="FixO_<mate"
     />
         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
         Your Trusted Partner for Home Services
         </span>
         <br /><br />
         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
         Connect with skilled professionals for all your home maintenance and repair needs. From plumbing to electrical work, weve got you covered.
         </span>
         <br /><br />
         <Link href="/getStarted"><RainbowButton>Get Started</RainbowButton></Link>
       </ShineBorder>
  </>
  );
};

export default Hero;
