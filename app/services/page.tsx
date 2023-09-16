import Link from "next/link";
import contactHref from '../util/contact';

export default function Services() {
  return (
    <main className='flex flex-col'>
      <div className="mx-auto mt-10 mb-10 w-[75%]">
        <h2 className='text-2xl font-semibold mb-5'>Services</h2>
        <p>A diverse array of development services and consultancy.</p>
        <p>We craft clean, scalable, tested code. Our app architecture is easy to read, maintain, and iterate upon.</p>
      </div>
      <div className='mx-auto p-8 bg-gray-100 rounded-lg w-[75%]'>
        <h2 className='text-2xl font-semibold mb-2'>Mobile Development</h2>
        <ul className='list-disc pl-5'>
          <li>Native iOS app development using Swift, SwiftUI</li>
          <li>Cross-platform mobile apps using frameworks such as Flutter, React Native</li>
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
          <li>Frontend: NextJS, React, Redux, Typescript, HTML, CSS</li>
          <li>Backend: FastAPI, GraphQL, Python</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Other: Figma, Docker, AWS Lambda, Git</li>
        </ul>
      </div>
    </main>
  );
}
