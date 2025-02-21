"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import ExportedImage from "next-image-export-optimizer";
import image from "@/public/images/logo.svg";
import engine from "@/public/images/engine-front.jpg";
import LocomotiveScroll from "locomotive-scroll";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsArrowDown } from "react-icons/bs";

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
      lenisOptions: {
        wrapper: window,
        lerp: 0.08,
        horizontal: true,
        smoothTouch: true,
        touchMultiplier: 2,
      },
    });
  }, []);

  return (
    <div
      className={`w-full px-5 md:px-12 text-[#222222] bg-[#d4c9c9] `}
    >
      <div
        className={`w-full flex justify-between  uppercase text-base md:text-2xl pt-5 md:pt-8 ${neuebold.className}`}
      >
        <h1>
          <a
            href="https://locomotive.ca/en"
            data-scroll
            data-scroll-position="2rem,5rem"
            className="hover:text-white transition duration-300 ease-in-out uppercase"
          >
            {" "}
            Locomotive.ca
          </a>
        </h1>
        <h1>v4.x – Edition</h1>
      </div>

      <div
        className={`w-full  pt-36 md:pt-20 text-[12vw] md:text-[13.5vw] uppercase leading-none ${neuemed.className}`}
      >
        <h1 data-scroll data-scroll-speed="0.1">
          Locomotive
        </h1>
        <h1 data-scroll data-scroll-speed="0.09">
          Scroll
        </h1>

        <div className="text-white w-full flex leading-none">
          <h1 data-scroll data-scroll-speed="0.4">
            v
          </h1>
          <h1 data-scroll data-scroll-speed="0.8">
            4
          </h1>
          <h1 data-scroll data-scroll-speed="0.2">
            .
          </h1>
          <h1 data-scroll data-scroll-speed="0.5">
            x
          </h1>
        </div>

        <ExportedImage
          src={image}
          alt="logo"
          className="w-7 md:w-[4.5rem] absolute right-5 md:right-12 top-60 md:top-[37rem]"
        />
      </div>

      <div className="my-10 w-full h-[1px] bg-[#222222] "></div>

      <div className="w-full md:flex  my-10">
        <div className="md:w-1/2 w-full flex items-start ">
          <p className={` md:pr-48 text-lg md:text-xl mb-20 md:mb-10  ${neuebold.className}`}>
            A simple scroll library used by developers at Locomotive. Built as a
            layer on top of ayamflow's virtual-scroll, it provides smooth
            scrolling with support for parallax effects, toggling classes, and
            triggering event listeners when elements are in the viewport.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-2 uppercase">
          <div
            className={`w-full flex justify-between text-xl md:text-2xl hover:text-white transition duration-300 ease-in-out cursor-pointer ${neuebold.className} `}
          >
            <h1>01. Speed Control</h1>
            <BsArrowDown />
          </div>
          <div className="w-full h-[1px] bg-[#222222] "></div>
          <div
            className={`w-full flex justify-between text-xl md:text-2xl hover:text-white transition duration-300 ease-in-out cursor-pointer ${neuebold.className} `}
          >
            <h1>02. Scroll direction</h1>
            <BsArrowDown />
          </div>
          <div className="w-full h-[1px] bg-[#222222] "></div>
          <div
            className={`w-full flex justify-between text-xl md:text-2xl hover:text-white transition duration-300 ease-in-out cursor-pointer ${neuebold.className} `}
          >
            <h1>03. Lerp effect</h1>
            <BsArrowDown />
          </div>
          <div className="w-full h-[1px] bg-[#222222] "></div>
          <div
            className={`w-full flex justify-between text-xl md:text-2xl hover:text-white transition duration-300 ease-in-out cursor-pointer ${neuebold.className} `}
          >
            <h1>04. Fixed Elements</h1>
            <BsArrowDown />
          </div>
          <div className="w-full h-[1px] bg-[#222222] "></div>
        
        
        
        
        
        </div>
      </div>


      <div className="md:flex justify-between mt-20 md:mt-56">
        <div className={`${neuemed.className} md:mt-36 `}>
          <h1 className="text-2xl">01.<br/>Speed control</h1>
          <p className="text-sm mt-5">Each element can be animated at a different speed. <br/>You get to choo-choo-choose!</p>
        </div>

        <div className="mt-20 md:mt-0">
          <ExportedImage
            src={engine}
          />

          <div className="bg-[#272727] rounded-full w-10 h-15 relative text-white flex justify-center items-center">4x</div>
        </div>


      </div>






    </div>
  );
};

export default page;
