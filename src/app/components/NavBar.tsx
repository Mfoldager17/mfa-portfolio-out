import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='bg-[#121212] border-b-[1px] py-2 flex justify-between items-center'>
      <nav className='text-white font-bold ml-4 flex gap-8 max-[400px]:hidden'>
        <Link href="/"> About </Link>
        <Link href="/"> About </Link>
        <Link href="/"> About </Link>
      </nav>
      <Image
        src='/mfa-logo.svg'
        alt='MFA Logo'
        width={470 / 3}
        height={200 / 3}
        quality={100}
      />

    </div>
  )
}

