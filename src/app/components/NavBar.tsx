import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink';

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
  return (
    <nav className=''>
      <div className='flex flex-wrap items-center justify-between bg-gradient-to-tr from-[#00b1d4] via-[#005d6f] to-[#003c48] border-b-[1px] mx-auto px-8 py-2'>
        <Link className="text-5xl text-white font-semibold" href="/">
          <Image
            src='/mfa-logo.svg'
            alt='MFA Logo'
            width={470 / 3}
            height={200 / 3}
            quality={100}
          />
        </Link>
        <div id="navbar" className='menu md:block md:w-auto'>
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
    </nav>
  )
}

