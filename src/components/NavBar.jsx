import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="nav flex bg-[1F1F1F] h-20 w-100vh sticky top-0 justify-between relative z-[0]">
      <div className="pt-5 pl-4">
        <svg
          id="logo-81"
          width="72"
          height="40"
          viewBox="0 0 72 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

        </svg>
      </div>

      <div className="menu flex">
        <div
          className="menubtn space-y-2 p-[2rem]"
          onClick={handleClick}
        >
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
        <ul className={click ? "Poke" : "menuitem"}>
          <li className="Li mt-1 text-white hover:text-[#DD7B6A]">
            <a href="#">Home</a>
          </li>
          <li className="Li mt-1 text-white hover:text-[#DD7B6A]">
            <a href="#">About</a>
          </li>
          <li className="Li mt-1 text-white hover:text-[#DD7B6A]">
            <a href="#">Skills</a>
          </li>
          <li className="Li mt-1 text-white hover:text-[#DD7B6A]">
            <a href="#">Project</a>
          </li>
          <li className="Li text-white mt-1 hover:text-[#DD7B6A]">
            <a href="#">Contact</a>
          </li>
          <li className="Li text-white hover:text-[#DD7B6A] ">
            <a href="#">
              <button className="but bg-[#DD7B6A] hover:bg-[#bb7366] ml-[3.5rem] text-white font-bold py-2 px-4 rounded-full">
                Github
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
