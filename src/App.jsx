import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import BGblurry from "./assets/bbblurry.svg";
import ProjectPage from "./components/ProjectPage";
import MySwimmingAppLogo from "./assets/my-swimming-app/myswimmingapp-logo.png";
import MySwimmingAppBanner from "./assets/my-swimming-app/myswimmingapp-banner.png";
import MySwimmingAppMedia1 from "./assets/my-swimming-app/myswimmingapp-statistics.png";
import MySwimmingAppMedia2 from "./assets/my-swimming-app/myswimmingapp-profile.png";
import MySwimmingAppMedia3 from "./assets/my-swimming-app/myswimmingapp-history.png";
import MySwimmingAppMedia4 from "./assets/my-swimming-app/myswimmingapp-login.png";
import FeelTheWeatherLogo from "./assets/feel-the-weather/feeltheweather-logo.png";
import FeelTheWeatherBanner from "./assets/feel-the-weather/feeltheweather-banner.png";
import FeelTheWeatherMedia1 from "./assets/feel-the-weather/feeltheweather-desktop_screenshot_1.png";
import FeelTheWeatherMedia2 from "./assets/feel-the-weather/feeltheweather-desktop_screenshot_3.png";
import FeelTheWeatherMedia3 from "./assets/feel-the-weather/feeltheweather-desktop_screenshot_2.png";
import FeelTheWeatherMedia4 from "./assets/feel-the-weather/feeltheweather-desktop_screenshot_4.png";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-slate-950 overflow-x-clip min-h-screen relative">
      <div className="overflow-hidden h-full">
        <img
          src={BGblurry}
          alt="bg-blurry"
          className="absolute animate-slow-pulse pointer-events-none object-cover w-full h-full z-0"
        />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/my-swimming-app"
          element={
            <ProjectPage
              icon={MySwimmingAppLogo}
              title="MySwimmingApp"
              releaseDate="December 2024"
              banner={MySwimmingAppBanner}
              techStack={[
                "React",
                "JavaScript",
                "WordPress",
                "PHP",
                "Material UI",
                "Figma",
                "Git",
              ]}
              repositories={[
                {
                  url: "https://github.com/ndroher/MySwimmingApp",
                  user: "ndroher",
                  name: "MySwimmingApp",
                  description:
                    "A Progressive Web App (PWA) for swimming workouts management.",
                },
                {
                  url: "https://github.com/ndroher/MySwimmingApp-API",
                  user: "ndroher",
                  name: "MySwimmingApp-API",
                  description: "MySwimmingApp's API.",
                },
              ]}
              about={
                <>
                  The proposed app aims to facilitate the training of swimming
                  athletes by offering features to create personalized workouts
                  and exercises, view statistics, and connect with other
                  swimmers.
                  <br />
                  <br />
                  The app allows users to create their own training plans,
                  adapting activities to their needs and skill levels. Users can
                  select different types of exercises and track their progress
                  over time, with the ability to visualize data such as daily
                  activities and most practiced swimming styles and exercises,
                  helping athletes to identify areas for improvement.
                  <br />
                  <br />
                  The development followed a Progressive Web App (PWA) approach,
                  ensuring broad compatibility across various devices. The app
                  is intended to be a valuable tool for athletes and
                  enthusiasts, optimizing swimming workouts and promoting
                  greater engagement among swimmers.
                </>
              }
              medias={[
                {
                  url: MySwimmingAppMedia1,
                  description: "MySwimmingApp — User Statistics",
                },
                {
                  url: MySwimmingAppMedia2,
                  description: "MySwimmingApp — User Profile",
                },
                {
                  url: MySwimmingAppMedia3,
                  description: "MySwimmingApp — Workout History",
                },
                {
                  url: MySwimmingAppMedia4,
                  description: "MySwimmingApp — Login Page",
                },
              ]}
            />
          }
        ></Route>
        <Route
          path="/feel-the-weather"
          element={
            <ProjectPage
              icon={FeelTheWeatherLogo}
              title="FeelTheWeather"
              releaseDate="May 2025"
              banner={FeelTheWeatherBanner}
              techStack={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "tsParticles",
                "REST API",
                "Figma",
                "Git",
              ]}
              repositories={[
                {
                  url: "https://github.com/ndroher/FeelTheWeather",
                  user: "ndroher",
                  name: "FeelTheWeather",
                  description:
                    "A Progressive Web App (PWA) for immersive and interactive weather experiences.",
                },
              ]}
              deployURL="https://feeltheweather.vercel.app/"
              about={
                <>
                  This project aims to transform real-time weather data into an
                  immersive and interactive user experience. The application
                  goes beyond simple forecasting by creating a website that
                  completely changes its visuals, sounds, and particle effects
                  to match the weather of a searched location, allowing the user
                  to truly feel the climate.
                  <br />
                  <br />
                  Using the OpenWeather API as its data source, the app
                  leverages the tsParticles library to generate dynamic effects
                  that react to weather conditions and user interactions. The
                  user interface was styled with a focus on the Glassmorphism
                  design trend to create a modern and visually appealing layout.
                  <br />
                  <br />
                  The development followed a Progressive Web App (PWA) approach,
                  ensuring broad compatibility and allowing the application to
                  be installed on any device. This project serves as a practical
                  demonstration of working with dynamic data, applying
                  responsive and interactive styling, and manipulating media to
                  enrich the user experience.
                </>
              }
              medias={[
                {
                  url: FeelTheWeatherMedia1,
                  description:
                    "Rio de Janeiro, Clear Sky Night, EN-US, Desktop",
                },
                {
                  url: FeelTheWeatherMedia2,
                  description: "Tokyo, Light Rain Day, JP, Desktop",
                },
                {
                  url: FeelTheWeatherMedia3,
                  description: "Seoul, Overcast Clouds Day, KR, Desktop",
                },
                {
                  url: FeelTheWeatherMedia4,
                  description: "Isone, Mist, EN-US, Desktop",
                },
              ]}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
