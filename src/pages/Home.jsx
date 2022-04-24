import InfoSection from '../components/InfoSection/InfoSection'
import NavBar from '../components/NavBar/NavBar'
import TopSection from '../components/TopSection/TopSection'
import { infoObjOne } from "../components/InfoSection/data";
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';


const Home = () => {
  return (
    <>
    <NavBar />
    <TopSection/>
    <InfoSection {...infoObjOne}/>
    <Resume />
    <Footer/>
    </>
  )
}

export default Home