import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./assets/LogoWebsiteJS.png";
import Header from "./components/Header";
import LinearDiv from "./components/LinearDiv";
import PersonalDetails from "./components/PersonalDetails";
import ProfileLinks from "./components/ProfileLinks";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Thought from "./components/Thought";

const App = () => {
  return (
    <section
      id="portfolio"
      className="flex justify-center items-center h-screen w-full"
    >
      {/* Main container */}
      <div className="main flex flex-col h-full w-full border border-gray-100 relative">
        {/* Navbar at top */}
        <div className="w-full border-b border-gray-100 absolute top-0 left-0">
          <Navbar />
        </div>

        {/* Content columns */}
        <div className="main2 flex flex-1">
          <div className="leftDiv w-[25%]"></div>
          <div className="centerDiv  w-[50%] h-full border border-gray-100 rounded-xl">
            {/* Logo at the center */}
            <div className="flex justify-start flex-col mt-14 h-full">
              <img
                src={logo}
                alt="Logo"
                className="logo w-full h-60 align-center object-contain"
              />
              <Header />
              <LinearDiv />
              <PersonalDetails />
              <LinearDiv />
              <ProfileLinks />
              <LinearDiv />
              <About />
              <LinearDiv />
              <Stack />
              <LinearDiv />
              <Experience />
              <LinearDiv />
              <Projects />
              <LinearDiv />
              <Thought />
              <LinearDiv />
              <Footer />
            </div>
          </div>
          <div className="rightDiv w-[25%]"></div>
        </div>
      </div>
    </section>
  );
};

export default App;
