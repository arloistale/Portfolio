import Image from "next/image";

type PortfolioItemCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  };

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ title, description, imageUrl, linkUrl }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative h-48 w-full">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"/>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <a href={linkUrl} className="mt-4 text-blue-500 hover:underline">Read More</a>
        </div>
      </div>
    );
  }

export default PortfolioItemCard;