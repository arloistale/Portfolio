import PortfolioItemCard from "./portfolio-item-card";

export default function PortfolioGrid() {
    const projects = [
      {
        title: "Project 1",
        description: "Description for project 1.",
        imageUrl: "/hero.jpeg",
        linkUrl: "#"
      },
      {
        title: "Project 2",
        description: "Description for project 2.",
        imageUrl: "/hero.jpeg",
        linkUrl: "#"
      },
      {
        title: "Project 3",
        description: "Description for project 3.",
        imageUrl: "/hero.jpeg",
        linkUrl: "#"
      },
      {
        title: "Project 2",
        description: "Description for project 2.",
        imageUrl: "/hero.jpeg",
        linkUrl: "#"
      },
      {
        title: "Project 3",
        description: "Description for project 3.",
        imageUrl: "/hero.jpeg",
        linkUrl: "#"
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
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
  