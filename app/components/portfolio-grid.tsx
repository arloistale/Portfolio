import PortfolioItemCard from "./portfolio-item-card";

export default function PortfolioGrid() {
    const projects = [
      {
        title: "goTenna Relay Health Manager App",
        description: "Built a radio signal health check appliciation for gotenna. Used by conservationists in Africa to ensure the health of their radio mesh network devices.",
        imageUrl: "/gotenna.png",
        linkUrl: "https://gotennapro.com/products/relay-health-manager-app"
      },
      {
        title: "Warby Parker Virtual Vision Test",
        description: "Built an eyeglass prescription renewal iOS app powered by computer vision from scratch.",
        imageUrl: "/warbyparker.jpeg",
        linkUrl: "https://www.warbyparker.com/virtual-vision-test"
      },
      {
        title: "Two Dots",
        description: "Architected fun game mechanics, powerful routing framework, and authentication system for hit mobile game Two Dots with Unity.",
        imageUrl: "/twodots.png",
        linkUrl: "https://www.dots.co/twodots/"
      },
      {
        title: "Recora Health App",
        description: "Built pagination for Recora's flagship Android app, which guides heart health patients to critical resources.",
        imageUrl: "/recora.svg",
        linkUrl: "https://www.recora.com/"
      },
      {
        title: "Headed South with ustwo",
        description: "Using experimental gesture-based technology, developed 27 proofs and 3 Android prototypes with Unity.",
        imageUrl: "/headedsouth.jpeg",
        linkUrl: "https://ustwo.com/work/google/headed-south/"
      },
      {
        title: "Roots Homes App",
        description: "Built a property equity growth projection iOS app from scratch.",
        imageUrl: "/rootshomes.jpeg",
        linkUrl: "https://www.roots.homes/"
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {projects.map((project, index) => (
          <PortfolioItemCard 
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            linkUrl={project.linkUrl}
          />
        ))}
      </div>
    );
  }
  