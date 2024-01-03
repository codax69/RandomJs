'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="fixed flex w-screen justify-between items-center bg-white hover:cursor-pointer lg:w-screen lg:justify-around py-2 z-40">
        <a onClick={() => router.push("/")}>
          <div className='flex items-center'>
            <h1 className='text-black pl-3 text-xl lg:font-normal lg:text-3xl'>Random</h1>
            <img className='h-12' src="https://cdn-icons-png.flaticon.com/128/541/541509.png?ga=GA1.1.627835424.1701535233&semt=ais" alt="" />
          </div>
        </a>
        <nav className='space-x-20 hidden lg:flex'>
          <a onClick={() => router.push("/")} className="nav-link text-slate-900 font-medium px-3 py-1 lg:hover:text-[#ffe100] hover:cursor-pointer">Home</a>
          <a onClick={() => router.push("/Q&A/Js")} className='nav-link text-slate-900 font-medium px-3 py-1 lg:hover:text-[#ffe100] hover:cursor-pointer'>Q&A</a>
          <a onClick={() => router.push("/About")} className='nav-link text-slate-900 font-medium px-3 py-1 lg:hover:text-[#ffe100] hover:cursor-pointer'>About</a>
        </nav>
        <div className='mr-3 lg:hidden' onClick={handleClick}>
        { !open ? <IoMdClose size={35}/>   : <GiHamburgerMenu size={35}/>}
        </div>
      </div>
      <nav className={`fixed z-40 flex flex-col top-16 right-0 h-auto w-full bg-white transform ${!open ? "block" : "hidden"} transition-transform duration-300 ease-in-out filter drop-shadow-md lg:hidden`}>
        <a onClick={() => {setOpen(!open); setTimeout(() => router.push("/"), 100)}} className="nav-link font-lg text-slate-900 font-semibold px-3 py-4 lg:hover:text-[#ffe100] hover:text-yellow-400">Home</a>
        <a onClick={() => {setOpen(!open); setTimeout(() => router.push("/Q&A/Js"), 100)}} className='nav-link font-lg text-slate-900 font-semibold py-4 px-3 lg:hover:text-[#ffe100] hover:text-yellow-400'>Q&A</a>
        <a onClick={() => {setOpen(!open); setTimeout(() => router.push("/About"), 100)}} className='nav-link font-lg text-slate-900 font-semibold py-4 px-3 lg:hover:text-[#ffe100] hover:text-yellow-400'>About</a>
      </nav>
    </>
  );
};

export default Navbar;
