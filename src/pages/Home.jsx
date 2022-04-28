import InfoSection from "../components/InfoSection/InfoSection";
import TopSection from "../components/TopSection/TopSection";
import { infoObjOne } from "../components/InfoSection/data";
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

  const toggleHandler = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar toggleHandler={toggleHandler} isOpen={isOpen} />
      <NavBar toTop={toTop} setToTop={setToTop} toggleHandler={toggleHandler} />
      <TopSection setToTop={setToTop} />
      <InfoSection {...infoObjOne} />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
