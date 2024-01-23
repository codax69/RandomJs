"use client";
import RQnABox from "@/app/Components/RQnABox";
import Sidebar from "@/app/Components/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="lg:max-w-7xl h-screen mx-auto lg:overflow-hidden">
        <div className="relative lg:w-60 lg:h-screen">
          <Sidebar />
        </div>
        <div className="absolute w-auto h-auto top-16 lg:p-20 lg:absolute lg:left-[23rem] ">
          <RQnABox />
        </div>
      </div>
    </>
  );
};

export default page;
