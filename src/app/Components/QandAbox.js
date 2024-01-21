"use client";
import React, { useState } from "react";
import QandA from "./QandAList";

const QandAbox = () => {
  const [sel, setSel] = useState(null);
  const hss = (e) => {
    setSel(e === sel ? null : e);
  };
  return (
    <ul>
      {
      QandA &&
        QandA.map((value, index) => {
          return (
            <li key={index} className="title flex flex-col p-5">
              <div className="flex justify-between">
                <span
                  className="text-black font-bold hover:text-slate-700 hover:cursor-pointer"
                  onClick={() => hss(index)}
                >
                  Question{value.id} :    {value.que}
                </span>
                <button
                  className="btn text-black py-2 px-5 hover:bg-white ml-10 hover:rounded-2xl"
                  onClick={() => hss(index)}
                >
                  Answer
                </button>
              </div>
              {sel === index ? <div className="text-slate-800"><span className=" text-blue-700 font-semibold">Answer:</span>  {value.ans}</div> : null}
            </li>
          );
        })}
    </ul>
  );
};

export default QandAbox;
