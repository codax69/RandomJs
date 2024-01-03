import React from 'react'

const Hero = (props) => {
  return (
    <>     <div className=' relative z-10 max-w-5xl mx-auto top-16 sm:pt-24 lg:pt-48'>
      <div className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">{props.heading}</div>
      <p className='text-slate-800 font-bold text-2xl text-center sm:text-2xl lg:text-3xl tracking-normal pt-4'>{props.subhead}</p>
    </div></>
  )
}

export default Hero