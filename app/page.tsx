import Link from 'next/link'
import PortfolioGrid from './components/portfolio-grid'
import Portrait from './components/portrait'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='bg-hero-gradient-small lg:bg-hero-gradient px-4 lg:px-24 -mt-3 lg:mt-0 flex flex-col lg:flex-row relative w-full min-h-screen h-auto justify-start lg:justify-between items-center'>
        <div className='justify-center mt-16 lg:mt-0 mb-16 xs:mb-20 sm:mb-24 lg:mb-0 mr-0 lg:mr-16 max-w-[95%]'>
          <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-hero'>Helping companies grow by developing high-impact web and mobile apps.</h1>
          <p className='font-thin text-base xs:text-lg md:text-xl mt-4'>A development service and consultancy started by Jon Lu, a Brooklyn-based engineer.</p>
          <Link href="#work" className="block lg:inline-block w-full lg:w-auto text-base md:text-lg bg-hero-orange text-white text-center py-4 px-10 rounded-lg mt-8 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hero-orange">See work</Link>
        </div>
        <Portrait className='mx-0 lg:mx-16 mb-24 lg:mb-0' />
      </div>

      <div id="work">
        <PortfolioGrid />
      </div>
    </main>
  )
}
