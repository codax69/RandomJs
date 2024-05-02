"use client";
import React, { useState } from "react";
import ReactQandA from "./ReactQandA";
import { motion } from "framer-motion";
import { Turret_Road } from "next/font/google";

const RQnABox = () => {
  const [isHover, setIsHover] = useState(false);
  const [underLine, setUnderLine] = useState(null);
  const [sel, setSel] = useState(null);
  const handleClick = () => {
    if (underLine !== null) {
      setIsHover(false);
    } else {
      setIsHover(true);
    }
  };
  const handleMouseEnter = (e) => {
    setIsHover(true);
    setUnderLine(e === underLine ? null : e);
    if (e === underLine) {
      setIsHover(true);
    }
    console.log(e.target);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const hss = (e) => {
    setSel(e === sel ? null : e);
    setIsHover(false);
  };
  return (
    <>
      <ol>
        {ReactQandA &&
          ReactQandA.map((value, index) => {
            return (
              <li key={index} className="title relative flex flex-col p-5">
                <div className="flex justify-between">
                  <span
                    className="text-black font-bold hover:text-slate-700 cursor-pointer"
                    onClick={() => hss(index)}
                  >
                    Question{value.id} :{" "}
                    <span
                      onClick={() => {
                        handleClick(index);
                        setIsHover(false);
                      }}
                      onMouseEnter={() => {
                        console.log(value);
                        handleMouseEnter(index);
                      }}
                      onMouseLeave={() => handleMouseLeave}
                      className="select-none "
                    >
                      {value.que}
                    </span>
                  </span>
                  <span>
                    <button
                      onMouseEnter={() => setIsHover(false)}
                      className="btn text-black py-2 px-5 hover:bg-white ml-10 hover:rounded-2xl "
                      onClick={() => {
                        setIsHover(!true);
                        hss(index);
                      }}
                    >
                      Answer
                    </button>
                  </span>
                </div>
                {/* {underLine === index ? (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={isHover ? { width: "80%" } : { width: "0" }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className={`absolute bottom-8 bg-gray-500 hidden lg:block w-full h-[1px]${
                      !isHover ? "pointer-events-none" : ""
                    }`}
                  ></motion.div>
                ) : null} */}
                {sel === index ? (
                  <div
                    onMouseEnter={() => setIsHover(false)}
                    className="text-slate-800"
                  >
                    <span className=" text-blue-700 w-[59%] font-semibold">
                      Answer:
                    </span>{" "}
                    {value.ans}
                  </div>
                ) : null}
              </li>
            );
          })}
      </ol>
    </>
  );
};

export default RQnABox;
