'use client'
import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import InfoBox from "./Components/InfoBox";
import Btn from "./Components/Btn";
import Link from 'next/link';
import TitleBox from './Components/TitleBox';
import Router from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Components/Footer'

const Page = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleRouteChange = (e) => {
      setProgress(0);
      setTimeout(() => {
        setProgress(30);
        setTimeout(() => {
          setProgress(50);
          setTimeout(() => {
            setProgress(100);
          }, 1000);
        }, 1000);
      }, 1000);
      console.log(e)
    };

    Router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <br />
      </div>
      <Hero heading="Welcome to Random JS - Your Ultimate Interview Preparation Hub!" subhead="🚀Skills with Expertly Curated Interview Questions and Answers" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:my-32 lg:grid lg: gap-4 lg:items-center">
        <TitleBox title=" 🌐 Explore our Comprehensive Interview Question Categories" />
        <div className="bg-[#ffe100]/50 p-3 rounded-2xl backdrop-filter backdrop-blur-sm  lg:w-[54rem] h-auto ">
          <InfoBox
            title="JavaScript Interview Questions"
            list1="&rarr; Understand the fundamentals with questions on closures, event delegation, and variable hoisting."
            list2="&rarr; Explore advanced topics like Promises, async/await, and ES6 features."
          />
          <InfoBox
            title="ReactJS Interview Questions"
            list1="&rarr;Master the basics: JSX, components, and state management."
            list2="&rarr;Dive into more complex concepts like React Hooks, context, and virtual DOM."
          />
          <InfoBox
            title="NextJS Interview Questions"
            list1="&rarr;Explore server-side rendering (SSR) and static site generation (SSG)."
            list2="&rarr;Learn about Next.js features, data fetching methods, and integration with Redux."
          />
        </div>
        <div className="flex items-center justify-center mt-4 lg:ml-14">
          <Link href="/Q&A"><Btn btnTitle="Jump To Question And Answer Journey" /></Link>
        </div>
        <div className="flex justify-end pr-14"><TitleBox title="🤓Features of Random JS" /></div>
        <div className="flex justify-end">
          <div className="bg-[#ffe100]/50 p-3 rounded-2xl backdrop-filter backdrop-blur-sm  lg:w-[54rem] h-auto">
            <InfoBox
              title="Structured Content"
              list1="&rarr; Our questions are organized by topic and difficulty to provide a systematic learning experience."
            />
            <InfoBox
              title="Detailed Answers:"
              list1="&rarr;  Each question comes with a comprehensive answer, helping you understand the underlying concepts."
            />
            <InfoBox
              title="Latest Updates:"
              list1="&rarr;   Stay updated with the latest trends and technologies in the world of JavaScript, ReactJS, and NextJS."
            />
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end mt-4 lg:mr-14"><Link href="/About"><Btn btnTitle="Jump To About" /></Link></div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
