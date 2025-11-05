import Link from "next/link";
import Image from 'next/image';
import contactHref from '../util/contact';

export default function About() {
  return (
    <main className='flex flex-col'>
      <div className="mx-auto mt-10 mb-10 w-[75%]">
        <h2 className='text-2xl font-semibold mb-5'>About</h2>
        <div className="flex flex-col md:flex-row md:items-center">
          <Image src={"/jon.jpg"} alt={"Picture of Jon"} width={500} height={500} className="rounded-3xl"/>
          <div className="py-10 md:py-0 md:ml-10">
            <p className="mb-4">Sky Egg Technologies is a development consultancy started by Jon Lu, a Brooklyn-based software engineer and writer.</p>
            <p className="mb-4">He has built apps for many industries including radio mesh networks, games, film, healthcare, and real estate.</p>
            <p className="mb-4">Clients:</p>
            <ul className='list-disc pl-5'>
              <li>Warby Parker</li>
              <li>Dots</li>
              <li>gotenna</li>
              <li>ustwo</li>
            </ul>
            <p className="mt-8">
              <Link href="/#work" className="border border-gray-500 text-gray-500 rounded-md px-4 py-2 hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">See work</Link>
            </p>
            <p className="mt-8">
              <Link href="https://github.com/arloistale" target="_blank" rel="noopener noreferrer" className="border border-gray-500 text-gray-500 rounded-md px-4 py-2 hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">Visit GitHub</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
