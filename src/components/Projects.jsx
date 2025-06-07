import React from "react";
import CardProjects from "./CardProjects";
import MySwimmingAppLogo from "../assets/my-swimming-app/myswimmingapp-logo.png";
import MySwimmingAppMockup from "../assets/my-swimming-app/myswimmingapp-mockup.png";
import FeelTheWeatherLogo from "../assets/feel-the-weather/feeltheweather-logo.png";
import FeelTheWeatherMockup from "../assets/feel-the-weather/feeltheweather-mockup.png";

const Projects = () => {
  return (
    <section className="container mx-auto w-3/4" id="projects">
      <h1
        className="text-2xl text-gray-200 text-center mt-16 mb-8"
        data-aos="zoom-out-down"
      >
        Featured work
      </h1>

      <ul className="flex flex-col items-center gap-12">
        <li data-aos="fade-left">
          <CardProjects
            icon={MySwimmingAppLogo}
            title="MySwimmingApp"
            technologies={[
              "React",
              "JavaScript",
              "WordPress",
              "PHP",
              "Material UI",
              "REST API",
            ]}
            description="A Progressive Web App designed to help swimmers create personalized training plans, track their progress and engage with other athletes."
            image={MySwimmingAppMockup}
            url="/my-swimming-app"
            reverse={false}
          />
        </li>
        <li data-aos="fade-right">
          <CardProjects
            icon={FeelTheWeatherLogo}
            title="FeelTheWeather"
            technologies={[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "tsParticles",
              "REST API",
            ]}
            description="A Progressive Web App that translates weather forecasts into a sensory experience, allowing users to feel the climate through an interactive and immersive design."
            image={FeelTheWeatherMockup}
            url="/feel-the-weather"
            deployURL="https://feeltheweather.vercel.app/"
          />
        </li>
      </ul>
    </section>
  );
};

export default Projects;
