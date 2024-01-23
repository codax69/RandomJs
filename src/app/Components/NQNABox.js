"use client";
import React, { useState } from "react";
import NextQNA from "./NextQNA";

const NQNABox = () => {
  const [sel, setSel] = useState(null);
  const ssh = (e) => {
    setSel(e === sel ? null : e);
  };
  return (
    <>
      <ul>
        {NextQNA &&
          NextQNA.map((value, index) => {
            return (
              <li className="title flex flex-col p-5" key={value.id}>
                <div className="title flex justify-between">
                  <span
                    className="text-black font-bold hover:text-slate-800 cursor-pointer"
                    onClick={() => ssh(index)}
                  >
                    Question{value.id} : {value.que}
                  </span>
                  <button
                    className="btn bg-yellow-400 text-black py-2 px-5 btn hover:bg-slate-400 ml-10 hover:rounded-2xl"
                    onClick={() => ssh(index)}
                  >
                    Answer
                  </button>
                </div>
                {sel === index ? (
                  <div className="text-slate-700">
                    <span className=" text-blue-700 font-semibold">
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
