import React from "react";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <>
      <div className="fixed h-screen w-60 bg-white pt-32 hidden lg:flex flex-col items-start z-20">
        <div className="text-yellow-400 font-bold text-center pl-[0.8rem] text-xl">
          Question And Answer
        </div>
        <Link
          className=" ml-8 p-5 flex items-center text-slate-700 icon1"
          href="/Q&A/Js"
        >
          <RiJavascriptLine size="25px" className="icon1" />{" "}
          <span className="pl-2">Javascript</span>
        </Link>
        <Link
          className="ml-8 p-5 flex items-center text-slate-700 icon2"
          href="/Q&A/React"
        >
          <FaReact size="25px" className="icon2" />
          <span className="pl-2 icon2">React</span>
        </Link>
        <Link
          className="ml-8 p-5 flex items-center text-slate-700 icon3"
          href="/Q&A/Next"
        >
          <TbBrandNextjs size="25px" className="icon3" />
          <span className="pl-2">Next</span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
