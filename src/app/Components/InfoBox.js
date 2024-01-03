import React from 'react'

const InfoBox = (props) => {
  return (
    <>
    <div className='lg:py-4'>
  <h2 className='text-slate-900 font-bold text-lg px-4 py-4  sm:text-lg lg:text-xl lg:px-12'>{props.title}</h2>
  <ul className='flex flex-col'>
  <li className='font-medium text-left text-base sm:text-base lg:px-20 lg:text-lg'>{props.list1}</li>
  <li className='font-medium text-left text-base sm:text-base lg:px-20 lg:text-lg pt-1'>{props.list2}</li>
</ul>
</div>
    </>
  )
}

export default InfoBox