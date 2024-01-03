import React from 'react'

const TitleBox = (props) => {
  return (
    <> <div className="top-7 block font-bold tracking-tighter text-xl text-slate-900 pt-4 pb-4 px-4 overflow-auto sm:text-xl lg:text-3xl">
   {props.title}
  </div></>
  )
}

export default TitleBox