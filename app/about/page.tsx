import Navbar from "../components/navbar";
import Image from 'next/image';

export default function About() {
  return (
    <main className='flex flex-col'>
      <Navbar isHomePage={false} />
      <div className="p-8 mt-20 mb-10">
        <p className="mb-20">Sky Egg Technologies is a development service and consultancy started by Jon Lu.</p>

        <div className="mx-auto">
          <Image src={'/jon.jpg'} alt={"Picture of Jon"} width={500} height={500}/>
        </div>

        <p className="mt-4">Thanks for visiting!</p>
      </div>
      
    </main>
  );
}
