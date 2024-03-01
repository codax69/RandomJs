"use client";
import React, { useState } from "react";
import QandA from "./QandAList";
import { motion } from "framer-motion";

const QandAbox = () => {
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
  const hss = (e) => {
    setSel(e === sel ? null : e);
  };

  return (
    <ul>
      {QandA &&
        QandA.map((value, index) => {
          return (
            <li
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
              className=" relative title flex flex-col p-5"
            >
              <div className="flex justify-between">
                <span
                  className="text-black font-bold hover:text-slate-700 hover:cursor-pointer"
                  onClick={() => hss(index)}
                >
                  Question{value.id} :{" "}
                  <span onClick={() => setIsHover(false)}>{value.que}</span>{" "}
                </span>
                <span>
                  <button
                    className="btn text-black py-2 px-5 hover:bg-white ml-10 hover:rounded-2xl "
                    onClick={() => hss(index)}
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
                  className="text-slate-800"
                >
                  <span className="text-blue-700 font-semibold">Answer:</span>{" "}
                  {value.ans}
                </div>
              ) : null}
            </li>
          );
        })}
    </ul>
  );
};

export default QandAbox;
