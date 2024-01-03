import React from 'react'

const Prog = (props) => {
  return (
    <>
    <div className="my-8">
    <span className="">{props.script}</span>
            <div className={`max-w-3xl h-2 ${props.cln} rounded-full flex items-center`}>
              <div className={`${props.w}  h-full text-center text-xs text-white ${props.clnMain} rounded-full`}></div>
            <span className='pl-2 text-sm font-medium'>{props.value}</span>
            </div>
    </div>
    </>
  )
}

export default Prog