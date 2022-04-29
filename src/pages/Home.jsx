import InfoSection from "../components/InfoSection/InfoSection";
import TopSection from "../components/TopSection/TopSection";
import { contactObj, infoObjOne, skillsObj } from "../components/data";
import Resume from "../components/Resume/Resume";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import NavBar from "../components/NavBar/NavBar";
import { useState } from "react";
import Skills from "../components/Skills/Skills";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [toTop, setToTop] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const homeToggleHandler = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggleHandler={toggleHandler} isOpen={isOpen} homeToggleHandler={homeToggleHandler} />
      <NavBar toTop={toTop} setToTop={setToTop} toggleHandler={toggleHandler} />
      <TopSection setToTop={setToTop} />

      <Resume />
      <Skills {...skillsObj} />
      <Contact {...contactObj} />

      <Footer />
    </>
  );
};

export default Home;
