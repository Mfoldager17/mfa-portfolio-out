import Image from 'next/image'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col '>
      <div className="mx-auto mt-32 xl:mt-0 px-8 py-4 md:ml-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
