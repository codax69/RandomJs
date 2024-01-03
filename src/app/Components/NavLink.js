'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const NavLink = (props) => {
  const router = useRouter()

  return (
    <a className=' font-medium text-slate-900 hover:cursor-pointer hover:text-slate-600 lg:pl-4' onClick={() => router.push(props.url)}>{props.NavName}</a>
  )
}

export default NavLink
