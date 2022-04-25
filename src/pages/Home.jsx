import InfoSection from '../components/InfoSection/InfoSection'
import TopSection from '../components/TopSection/TopSection'
import { infoObjOne } from "../components/InfoSection/data";
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';


const Home = () => {


  return (
    <>
    {/* <NavBar toTop={toTop} setToTop={setToTop} /> */}
    <TopSection />
    <InfoSection {...infoObjOne}/>
    <Resume />
    <Footer/>
    </>
  )
}

export default Home