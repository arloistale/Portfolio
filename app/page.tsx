import Image from 'next/image'
import PortfolioGrid from './components/portfolio-grid'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className='relative w-full pb-[56.25%]'>
        <Image
          src="/hero.jpeg"
          layout="fill"
          objectFit='cover'
          alt="A mood-setting picture."
        />
        <div className='z-25 absolute inset-0 flex flex-col justify-center items-center'>
          <h1 className='text-base sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg max-w-[75%] mb-4'>Helping companies grow by developing high-impact web and mobile apps.</h1>
          <Link href="/services" className='sm:mt-[15%] text-white bg-skyegg-orange hover:bg-orange-700 py-3 px-6 rounded-lg transition duration-300 ease-in-out'>SERVICES</Link>
        </div>
      </div>

      <PortfolioGrid />
      <Footer />
    </main>
  )
}
