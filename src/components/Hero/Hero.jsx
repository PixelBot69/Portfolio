import React from "react";
import Kun from "./kun.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="flex justify-between relative items-center ml-[10px] mr-[10px] mt-[12rem] flex-col-reverse md:flex-row z-[-1]">
      <div className="flex flex-col ml-[4rem] md:ml-[9rem]">
        <h1 className="text-white text-[2rem]">I’M</h1>
        <h1 className="text-[2rem] md:text-[3rem] text-[#DD7B6A]">ARYAN KUN!</h1>
        <h1 className="text-[2rem] md:text-[3rem] text-white">FRONTEND DEVELOPER</h1>
        <p className="pt-[1rem] pr-[4rem] md:pr-[21rem] text-white">I am a self-taught Frontend Dev. I’m currently living in Jaipur and pursuing B-Tech in computer science.</p>
        <div className="flex pt-[2rem] relative left-[-3rem]">
          <button className="bg-[#DD7B6A] hover:bg-[#bb7366]  ml-[3.5rem] w-[7rem] text-white font-bold py-2 px-4 rounded-full">
            <a href="#kk" className="inline-block">Linkdn</a>
          </button>
          <button className="bg-[#DD7B6A] hover:bg-[#ddd6d4]  ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 rounded-full">
            <a href="#ab" className="inline-block">Resume</a>
          </button>
        </div>
      </div>
      <img className="ani h-[17.25rem] md:h-[21.25rem] mr-[1rem] md:mr-[7rem] mb-3 relative top-[-4rem]" src={Kun} alt="Aryan Kun" />
    </div>
  );
}

export default Hero;
