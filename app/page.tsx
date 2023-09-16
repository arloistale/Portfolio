import Image from 'next/image'
import PortfolioGrid from './components/portfolio-grid'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='-mt-3 md:mt-0 flex flex-col relative w-full h-screen bg-hero-orange justify-center items-center'>
        <div className="mb-8 transform lg:scale-90 oval-portrait w-48 h-60 sm:w-64 sm:h-80 lg:w-[20rem] lg:h-[24rem]">
          <Image
              src="/hero-1.jpg"
              layout="fill"
              objectFit='cover'
              alt="A mood-setting picture."
          />
        </div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg max-w-[75%] mb-32 md:mb-0'>Helping companies grow by developing high-impact web and mobile apps.</h1>
      </div>

      <div id="work">
        <PortfolioGrid />
      </div>
    </main>
  )
}

