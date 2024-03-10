import React from "react";
import "./About.css";
import 'boxicons'

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function About() {
  return (
    <div>
      <hr className="mt-[10.75rem] ml-[5.75rem] mr-[5.75rem] border-[#DD7B6A] "></hr>
      <div className="flex flex-col ml-[4rem] mt-[6rem] md:ml-[9rem]">
        <h1 className="text-white text-[3rem]">ABOUT</h1>
        <p className="pr-[4rem] pt-[1rem] text-white text-[1.15rem]">My name is <span className="text-[#DD7B6A]">Aryan Singh</span></p>
        <p className="pt-[1rem] pr-[4rem] text-white">I am a self-taught Frontend Dev. I’m currently living in Jaipur and pursuing B-Tech in computer science. I’m originally from Lucknow and have fun time in designing UI. My hobbies are watching anime and playing video games.</p>
      </div>
      <div className="flex justify-center mt-5">
        <a href="#" className="icon"><box-icon type='logo' name='twitter' color='#fffafa'></box-icon></a>
        <a href="#" className="icon"><box-icon name='twitch' type='logo' color='#fffafa'></box-icon></a>
        <a href="#" className="icon"><box-icon name='telegram' type='logo' color='#fffafa'></box-icon></a>
        <a href="#" className="icon"><box-icon name='instagram' type='logo' flip='horizontal' color='#fffafa'></box-icon></a>
        <a href="#" className="icon"><box-icon name='discord-alt' type='logo' color='#fffafa'></box-icon></a>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-10 ">
        <LeftSection>
          <div>
            <button className="bg-[#F5573D] ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 rounded-full">Education</button>
            <div className="flex">
              <div className="flex flex-col m-5">
                <button className="bg-[#F5573D] mt-8 mb-12 ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 ">2008-2017</button>
                <button className="bg-[#F5573D] mb-12 ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 ">2017-2022</button>
                <button className="bg-[#F5573D] ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 ">2022-2026</button>
              </div>
              <div className="border-l-2 border-white h-[13rem] mt-[3rem]">
                <div className="w-[1.15rem] h-[1.15rem] relative right-[0.75rem] top-[-0.1rem] bg-red-400 rounded-full"></div>
                <div className="w-[1.15rem] h-[1.15rem] relative right-[0.75rem] top-[4.9rem] bg-red-400 rounded-full"></div>
                <div className="w-[1.15rem] h-[1.15rem] relative right-[0.75rem] top-[10rem] bg-red-400 rounded-full"></div>
              </div>
              <div className="flex flex-col text-white mt-10">
                <h1 className="relative top-[0rem]">CITY MONTESSORI SCHOOL</h1>
                <h1 className="relative top-[5rem]">JAGRAN PUBLIC SCHOOL</h1>
                <h1 className="relative top-[10rem]">MANIPAL UNIVERSITY JAIPUR</h1>
              </div>
            </div>
          </div>
        </LeftSection>
        <RightSection>
          <div>
            <button className="bg-[#7063FF] ml-[2rem] w-[10rem] text-white font-bold py-2 px-4 rounded-full">Work Experience</button>
            <div className="flex">
              <div className="flex flex-col m-5 ">
                <button className="bg-[#7063FF] mt-8 mb-12 ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 ">21-23 July</button>
                <button className="bg-[#7063FF] mb-12 ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 ">24-19 Oct</button>
                <button className="bg-[#7063FF] ml-[2rem] w-[7rem] text-white font-bold py-2 px-4 ">7-29 Sep</button>
              </div>
              <div className="border-l-2 border-white h-[13rem] mt-[3rem]">
                <div className="w-[1.15rem] h-[1.15rem] relative right-[0.75rem] top-[-0.1rem] bg-[#7063FF] rounded-full"></div>
                <div className="w-[1.15rem] h-[1.15rem] relative right-[0.75rem] top-[4.9rem] bg-[#7063FF] rounded-full"></div>
                <div className="w-[1.15rem] h-[1.15rem] relative right-[0.75rem] top-[10rem] bg-[#7063FF] rounded-full"></div>
              </div>
              <div className="flex flex-col text-white mt-10">
                <h1 className="relative top-[0rem]">CITY MONTESSORI SCHOOL</h1>
                <h1 className="relative top-[5rem]">JAGRAN PUBLIC SCHOOL</h1>
                <h1 className="relative top-[10rem]">MANIPAL UNIVERSITY JAIPUR</h1>
              </div>
            </div>
          </div>
        </RightSection>
      </div>
      <hr className="mt-[10.75rem] ml-[5.75rem] mr-[5.75rem] border-[#DD7B6A] "></hr>
    </div>
  );
}

export default About;
