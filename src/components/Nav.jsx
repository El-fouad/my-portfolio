import React from "react";
//import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboard, BsBriefcase, BsChatSquare } from "react-icons/bs";
//Links
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <>
      <nav className=" fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className=" container mx-auto">
          {/* nav inner */}
          <div className=" w-full bg-black/20 backdrop-blur-2xl h-[96px]
         rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50
          ">
            <Link className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BiHomeAlt />
            </Link>
            <Link className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BiUser />
            </Link>
            <Link className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsClipboard />
            </Link>
            <Link className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsBriefcase />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
