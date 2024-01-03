"use client";
import React, { useState } from "react";
import ReactQandA from "./ReactQandA";

const RQnABox = () => {
  const [sel, setSel] = useState(null);
  const hss = (e) => {
    setSel(e === sel ? null : e);
  };
  return (
    <>
      <ol>
        {ReactQandA &&
          ReactQandA.map((value, index) => {
            return (
              <li key={index} className="title flex flex-col p-5">
                <div className="flex justify-between">
                  <span
                    className="text-black font-bold hover:text-slate-700 cursor-pointer"
                    onClick={() => hss(index)}
                  >
                    Question{value.id} : {value.qus}
                  </span>
                  <button
                    className="btn bg-yellow-400 text-black py-2 px-5 hover:bg-white ml-10 hover:rounded-2xl"
                    onClick={() => hss(index)}
                  >
                    Answer
                  </button>
                </div>
                {sel === index ? (
                  <div className="text-slate-800"><span className=" text-blue-700 font-semibold">Answer:</span> {value.ans}</div>
                ) : null}
              </li>
            );
          })}
      </ol>
    </>
  );
};

export default RQnABox;
