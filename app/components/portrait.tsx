import Image from 'next/image';

interface PortraitProps {
    className?: string;
  };
  
  const Portrait = ({className}: PortraitProps) => {
    return (
      <div className={`${className} flex-shrink-0 relative w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64`}>
        <div className="absolute inset-0 bg-white rounded-full transform scale-150 "></div>
        <div className="absolute inset-0 bg-gray-300 rounded-full transform scale-105"></div>
        <Image
          src="/jon.jpg"
          alt="Picture of Jon."
          objectFit="cover"
          layout='fill'
          objectPosition='center'
          className='rounded-full'
        />
      </div>
    );
  }

export default Portrait;