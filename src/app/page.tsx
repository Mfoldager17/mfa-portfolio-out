import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-stone-700'>
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
