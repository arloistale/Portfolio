import Image from 'next/image';

interface PortraitProps {
    className?: string;
  };
  
  const Portrait = ({className}: PortraitProps) => {
    return (
      <div className={`${className} flex-shrink-0 relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64`}>
        <div className="absolute inset-0 bg-white rounded-full transform scale-150 "></div>
        <div className="absolute inset-0 bg-gray-300 rounded-full transform scale-105"></div>
        <Image
          fill
          src="/jon.jpg"
          alt="Picture of Jon."
          className='rounded-full object-cover'
        />
      </div>
    );
  }

export default Portrait;