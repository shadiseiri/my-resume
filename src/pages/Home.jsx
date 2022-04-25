import InfoSection from '../components/InfoSection/InfoSection'
import TopSection from '../components/TopSection/TopSection'
import { infoObjOne } from "../components/InfoSection/data";
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import NavBar from '../components/NavBar/NavBar';
import { useState } from 'react';


const Home = () => {
  const [toTop, setToTop] = useState(false);
  


  return (
    <>
    <NavBar toTop={toTop} setToTop={setToTop} />
    <TopSection setToTop={setToTop}/>
    <InfoSection {...infoObjOne}/>
    <Resume />
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home