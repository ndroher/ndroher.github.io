import React from "react";
import CardProjects from "./CardProjects";
import Icon1 from "../assets/myswimmingapp.png";
import Mockup1 from "../assets/mockup-1.png";

const Projects = () => {
  return (
    <section className="container mx-auto w-3/4">
      <h1 className="text-2xl text-gray-200 text-center mt-16 mb-8">
        Featured work
      </h1>

      <ul className="flex flex-col items-center">
        <li>
          <CardProjects
            icon={Icon1}
            title="MySwimmingApp"
            technologies={["React", "WordPress", "PWA", "REST API"]}
            description="A Progressive Web App designed to help swimmers create personalized training plans, track their progress and engage with other athletes."
            image={Mockup1}
          />
        </li>
      </ul>
    </section>
  );
};

export default Projects;
