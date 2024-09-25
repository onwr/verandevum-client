import React, { useState } from "react";

const Slider = () => {
  const [ad, setAd] = useState("Burak Biçer");

  return (
    <div className="container relative max-w-screen-xl mt-5 mx-auto">
      <img src="./images/slidebg.jpg" className="opacity-5 rounded-xl" />
      <div className="absolute bottom-1/2 translate-y-1/2 lg:top-40 right-1/2 transform translate-x-1/2">
        <p className="text-2xl md:text-5xl text-center">{ad}</p>
        <p className="text-3xl md:text-5xl text-center mt-5">HAİR STUDİO</p>
      </div>
      <img
        src="/images/siluet.png"
        className="absolute right-1/2 transform translate-x-1/2 rounded-t-full hidden md:block bottom-0"
      />
    </div>
  );
};

export default Slider;
