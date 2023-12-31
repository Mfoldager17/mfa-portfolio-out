'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

const navLinks = [{
  title: "About",
  path: "#about",
},
{
title: "Projects",
path: "#projects",
},
{
title: "Contact",
path: "#contact",
},
];

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
      <nav className='fixed top-0 left-0 right-0 z-10 rounded-md bg-opacity-100 bg-inherit border-b-[2.5px] border-[#8ff9ff]'>
      <div className='h-16 flex items-center justify-end  mx-auto px-4'>

        <div className='mobile-menu block md:hidden'>
        {
          !navbarOpen ? (
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 py-2 border rounded border-[#b8b6b6] text-[#b8b6b6] hover:text-white hover:border-white'>
            <Bars3Icon 
            className='h-5 w-5'
            />
          </button>
            ) : (
          <button onClick={() => setNavbarOpen(!navbarOpen)} className='flex items-center px-3 py-2 border rounded border-[#b8b6b6] text-[#b8b6b6] hover:text-white hover:border-white'>
            <XMarkIcon className='h-5 w-5'/>
          </button>
            )
        }
        </div>
        <div id="navbar" className='menu hidden md:block md:w-auto'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title}/>
                </li>
              ))
              }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

