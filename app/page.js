import React from 'react';
import localFont from "next/font/local";


const neue = localFont({
  src: '../public/Neuemedium.otf',
});

const page = () => {
  return (
    <div className={`w-full h-screen text-white bg-slate-900 uppercase ${neue.className}`}>


      <div className='nav w-full h-20'>
          <ul className={` w-full h-full flex items-center justify-end px-10 gap-10 text-white uppercase ${neue.className}`}>
            <li>home</li>
            <li>conatc</li>
            <li>blog</li>
            <li>service</li>
          </ul>

      </div>
      My First VErcel Deployed app
    </div>
  )
}

export default page
