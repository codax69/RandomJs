'use client'
import NQNABox from '@/app/Components/NQNABox'
import QandAbox from '@/app/Components/QandAbox'
import RQnABox from '@/app/Components/RQnABox'
import Sidebar from '@/app/Components/Sidebar'
import React from 'react'


const page = () => {
  return (
    <> <div className='lg:max-w-7xl h-screen mx-auto lg:overflow-hidden'>
      <div className='relative lg:w-60 lg:h-screen'>
        <Sidebar />
      </div>
      <div className='w-auto h-auto pt-16 lg:top-16  lg:p-20 lg:absolute lg:left-[23rem]'>
        <QandAbox/>
      </div>
      <div className='w-auto h-auto top-16 lg:p-20 lg:fixed lg:left-[23rem] lg:hidden '>
        <NQNABox/>
      </div>
      <div className='w-auto h-auto top-16 lg:p-20 lg:fixed lg:left-[23rem] lg:hidden '>
        <RQnABox/>
      </div>
    </div></>
  )
}

export default page