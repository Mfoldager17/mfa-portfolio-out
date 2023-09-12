import Image from 'next/image'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div className="container mx-auto px-8 py-4 md:ml-4">
        <HeroSection />
      </div>
    </main>
  )
}
