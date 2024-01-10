'use client'
import React from 'react';
import Hero from '../Components/Hero';
import TitleBox from '../Components/TitleBox';
import InfoBox from '../Components/InfoBox';
import Prog from '../Components/Prog'
import Footer from '../Components/Footer';

const Page = () => {
  return (
    <>
      <section className=" relative px-4 lg:max-w-7xl h-auto mx-auto">
        <Hero heading="Pritesh Patel-Web Creator" subhead="Welcome to the Developer Page of Random JS! Meet Pritesh Patel, the innovative mind and Lead Developer behind this comprehensive platform." />
        <div className="my-32">
        <div className='my-12'>
        <div className="flex justify-end pr-14"><TitleBox title="🌟 About Pritesh Patel" /></div>
        <div className="flex justify-end">
          <div className="bg-[#ffe100]/50 p-3 rounded-2xl backdrop-filter backdrop-blur-sm lg:w-[54rem] h-auto">
            <InfoBox
              list1="Pritesh Patel is a passionate web developer with a strong focus on JavaScript, ReactJS, and NextJS. With a wealth of experience in the field, Pritesh Patel has contributed significantly to creating a resource that empowers developers in their interview preparation journey."
            />
          </div>
        </div>
        </div>
        <div className='my-12'>
        <div className="flex justify-start lg:pr-14"><TitleBox title="🚀 Contributions to Random JS" /></div>
        <div className="flex justify-start">
          <div className="bg-[#ffe100]/50 p-3 rounded-2xl backdrop-filter backdrop-blur-sm lg:w-[54rem] h-auto">
            <InfoBox
              list1="Pritesh Patel has been the driving force behind Random JS, leading the development team to create a user-friendly platform for interview preparation."
            />
          </div>
        </div>
        </div>
        <div className='my-12'>
        <div className="flex justify-end lg:pr-14"><TitleBox title="👩‍💻 Technical Expertise" /></div>
        <div className="flex justify-end ">
          <div className="bg-[#ffe100]/50 p-3 w-full rounded-2xl backdrop-filter backdrop-blur-sm lg:w-[54rem] h-auto">
            <Prog script="Next" cln="bg-black/10" clnMain="bg-black" w="w-[9.5rem] lg:w-[21rem]" value="40.3%" />
            <Prog script="React" cln="bg-sky-300" clnMain="bg-sky-600" w="w-1/2" value="50.75%"/>
            <Prog script="JavaScript" cln="bg-yellow-300" clnMain="bg-yellow-600" w="w-[44.43rem]" value="90%"/>
            <Prog script="CSS/TailwindCSS" cln="bg-blue-300" clnMain="bg-blue-600" w="w-[46rem]" value="92.3%"/>
            <Prog script="HTML" cln="bg-orange-300" clnMain="bg-orange-600" w="w-[48rem]" value="97.3%"/>
            </div>
          </div>
        </div>
        </div>
        </section>
        <div className=' relative bottom-0'><Footer/></div>
    </>
  );
}

export default Page;
