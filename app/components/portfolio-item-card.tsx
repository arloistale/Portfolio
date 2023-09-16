import Image from "next/image";
import Link from "next/link";

type PortfolioItemCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  };

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ title, description, imageUrl, linkUrl }) => {
    return (
      <Link href={linkUrl} className="bg-gray-50 shadow-sm rounded-lg overflow-hidden hover:underline">
        <div className="relative h-48 w-full">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"/>
        </div>
        <div className="p-4">
          <h2 className="text-lg mb-2 text-gray-700">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </Link>
    );
  }

export default PortfolioItemCard;