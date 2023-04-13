"use client";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import React, { useState } from 'react';

const Banner = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(2);

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="max-w-[1400px] h-[720px] w-full m-auto py-16 px-4 relative group">
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      <img src={images[currentImage].src} alt="" />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={30}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight size={30}/>
      </div>
    </div>
  );
}

export default Banner;
