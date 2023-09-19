import Link from 'next/link'
import PortfolioGrid from './components/portfolio-grid'
import Portrait from './components/portrait'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='px-4 lg:px-24 -mt-3 lg:mt-0 flex flex-col lg:flex-row relative w-full h-screen bg-hero-blue justify-center lg:justify-between items-center'>
        <div className='justify-center lg:mt-0 mb-16 lg:mb-0 mr-0 lg:mr-16 max-w-[75%]'>
          <h1 className='text-2xl lg:text-4xl font-bold text-hero'>Helping companies grow by developing high-impact web and mobile apps.</h1>
          <Link href="#work" className="block lg:inline-block w-full lg:w-auto bg-hero-orange text-white py-4 px-6 rounded-lg mt-8 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hero-orange">See work</Link>
        </div>
        <Portrait className='' />
      </div>

      <div id="work">
        <PortfolioGrid />
      </div>
    </main>
  )
}
