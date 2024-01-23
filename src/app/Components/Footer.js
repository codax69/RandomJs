import React from "react";
import NavBox from "./NavBox";

const Footer = () => {
  return (
    <>
      <div className=" bg w-full ">
        <div className=" max-w-7xl mx-auto h-auto pt-24 text-white ">
          <div className="flex space-x-10 pb-16 px-8 lg:pb-24 lg:px-20">
            <NavBox
              Head="Question And Answer"
              url1="/Q&A/Js"
              navLink1="Javascript"
              url2="/Q&A/React"
              navLink2="React"
              url3="/Q&A/Next"
              navLink3="Next"
            />
            <NavBox
              Head="Question And Answer"
              url1="/Q&A/Js"
              navLink1="Javascript"
              url2="/Q&A/React"
              navLink2="React"
              url3="/Q&A/Next"
              navLink3="Next"
            />
            <NavBox
              Head="Question And Answer"
              url1="/Q&A/Js"
              navLink1="Javascript"
              url2="/Q&A/React"
              navLink2="React"
              url3="/Q&A/Next"
              navLink3="Next"
            />
          </div>
          <div className="w-full h-[2px] bg-slate-950"></div>
          <div className="flex items-center">
            <a onClick={() => router.push("/")}>
              <div className="flex items-center">
                <h1 className="text-black pl-16 py-11 text-xl lg:font-normal lg:text-3xl">
                  Random
                </h1>
                <img
                  className="h-12"
                  src="https://cdn-icons-png.flaticon.com/128/541/541509.png?ga=GA1.1.627835424.1701535233&semt=ais"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
