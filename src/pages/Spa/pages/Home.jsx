import React ,{useState} from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import InfoSection from "../Components/InfoSection/InfoSection";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from '../Components/InfoSection/data'
import  Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import SignIn from "./SignIn";

const Home = () => {
const [isOpen , setIsOpen] = useState(false)

const toggleHandler = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar toggleHandler={toggleHandler} isOpen={isOpen} />
      <Navbar toggleHandler={toggleHandler} />
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Features />
      <SignIn/>
      <Footer/>

    </>
  );
};

export default Home;
