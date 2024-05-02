"use client";
import React, { useState } from "react";
import NextQNA from "./NextQNA";
import { motion } from "framer-motion";

const NQNABox = () => {
  const [isHover, setIsHover] = useState(false);
  const [underLine, setUnderLine] = useState(null);
  const [sel, setSel] = useState(null);

  const handleMouseEnter = (e) => {
    setIsHover(true);
    setUnderLine(e === underLine ? null : e);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const ssh = (e) => {
    setSel(e === sel ? null : e);
  };
  return (
    <>
      <ul>
        {NextQNA &&
          NextQNA.map((value, index) => {
            return (
              <li
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="title relative flex flex-col p-5"
                key={value.id}
              >
                <div className="title flex justify-between">
                  <span
                    className="text-black font-bold hover:text-slate-800 cursor-pointer"
                    onClick={() => ssh(index)}
                  >
                    Question{value.id} :{" "}
                    <span onClick={() => setIsHover(false)}>{value.que}</span>
                  </span>
                  <span>
                    <button
                      className="btn text-black py-2 px-5 hover:bg-white ml-10 hover:rounded-2xl "
                      onClick={() => ssh(index)}
                    >
                      Answer
                    </button>
                  </span>
                </div>
                {/* {underLine === index ? (
                <motion.div
                  initial={{ width: "0" }}
                  animate={isHover ? { width: "80%" } : { width: "0" }}
                  className="absolute bottom-8 bg-gray-500  w-full h-[1px]"
                ></motion.div>
              ) : null} */}
                {sel === index ? (
                  <div
                    onMouseEnter={() => setIsHover(false)}
                    className="text-slate-700"
                  >
                    <span className=" text-blue-700 w-[59%] font-semibold">
                      Answer:
                    </span>
                    {value.ans}
                  </div>
                ) : null}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default NQNABox;
