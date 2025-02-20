"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import image from "@/public/images/logo.svg";
import LocomotiveScroll from 'locomotive-scroll';

const neuereg = localFont({
  src: "../public/fonts/NeueMontreal-Regular.otf",
});
const neuemed = localFont({
  src: "../public/fonts/Neuemedium.otf",
});
const neuebold = localFont({
  src: "../public/fonts/neueBold.otf",
});
const neuelight = localFont({
  src: "../public/fonts/NeueLight.otf",
});




const page = () => {



  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions:{
        wrapper: window,
        lerp:0.08,
        horizontal:true,
        smoothTouch: true,
        touchMultiplier: 2,
      }
    });
  
    
  }, [])
  




  return (
    <div className={`w-full px-5 md:px-12 text-black bg-[#d4c9c9] uppercase`}>
      <div
        className={`w-full flex justify-between  text-base md:text-2xl pt-5 md:pt-8 ${neuebold.className}`}
      >
        <h1>
          <a href="https://locomotive.ca/en" data-scroll data-scroll-position = "2rem,5rem"> Locomotive.ca</a>
        </h1>
        <h1>v4.x – Edition</h1>
      </div>

      <div
        className={`w-full  pt-36 md:pt-20 text-[12vw] md:text-[13.5vw] leading-none ${neuemed.className}`}
      >
        <h1 data-scroll data-scroll-speed="0.1">Locomotive</h1>
        <h1 data-scroll data-scroll-speed="0.09">Scroll</h1>

        <div className="text-white w-full flex leading-none">
          <h1 data-scroll data-scroll-speed="0.4">v</h1>
          <h1 data-scroll data-scroll-speed="0.8">4</h1>
          <h1 data-scroll data-scroll-speed="0.2">.</h1>
          <h1 data-scroll data-scroll-speed="0.5">x</h1>
        </div>

        <Image
          src={image}
          alt="logo"
          className="w-7 md:w-[4.5rem] absolute right-5 md:right-12 top-60 md:top-[37rem]"
        />
      </div>

      <div className="my-10 w-full h-[1px] bg-black "></div>
    </div>
  );
};

export default page;
