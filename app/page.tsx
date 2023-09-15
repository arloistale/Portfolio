import Image from 'next/image'
import PortfolioGrid from './components/portfolio-grid'
import Footer from './components/footer'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className='relative w-full pb-[56.25%]'>
        <Image
          src="/hero.jpeg"
          layout="fill"
          objectFit='cover'
          alt="Picture of Jon"
        />
        <h2 className="text-xl font-bold mb-2"></h2>
      </div>

      <PortfolioGrid />
      <Footer />
    </main>
  )
}
