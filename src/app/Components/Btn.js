import React from "react";

const Btn = (props) => {
  return (
    <>
      <button className="btn text-black px-2 py-2 font-normal text-base border-2 border-solid border-[#131100]   lg:text-xl tracking-tighter hover:bg-[#ffeb53]">
        {props.btnTitle}
      </button>
    </>
  );
};

export default Btn;
