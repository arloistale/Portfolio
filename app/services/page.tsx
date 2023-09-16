import Navbar from "../components/navbar";

export default function Services() {
  return (
    <main className='flex flex-col'>
      <Navbar isHomePage={false} />
      <div className="p-8 mt-20 mb-10">
        <h2 className='text-2xl font-semibold mb-5'>Hello!</h2>
        <p>Sky Egg Technologies offers a diverse suite of development services and consultancy.</p>
        <p>We craft clean, scalable, tested code. Our app architecture is easy to read, maintain, and iterate upon.</p>
      </div>
      <div className='mx-auto mt-10 p-8 bg-gray-100 rounded-lg w-[75%]'>
        <h2 className='text-2xl font-semibold mb-2'>Mobile Development</h2>
        <ul className='list-disc pl-5'>
          <li>iOS app development using Swift, SwiftUI</li>
          <li>Cross-platform mobile apps using Flutter</li>
        </ul>
      </div>
      <div className='mx-auto mt-10 p-8 bg-gray-100 rounded-lg w-[75%]'>
        <h2 className='text-2xl font-semibold mb-2'>Interactive digital experiences</h2>
        <ul className='list-disc pl-5'>
          <li>Mobile, Web, AR, XR interactive content using Unity</li>
        </ul>
      </div>
      <div className='mx-auto mt-10 p-8 bg-gray-100 rounded-lg w-[75%]'>
        <h2 className='text-2xl font-semibold mb-2'>Web Development</h2>
        <ul className='list-disc pl-5'>
          <li>Frontend: NextJS, React, Redux, Apollo GraphQL, Typescript, HTML, CSS</li>
          <li>Backend: FastAPI, Strawberry GraphQL, Python</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Other: Docker, AWS Lambda, Git, Netlify, Fly.io</li>
        </ul>
      </div>
      <div className="p-8 my-20">
        <h2 className='text-2xl font-semibold mb-2'>And more... on request!</h2>
      </div>
    </main>
  );
}
