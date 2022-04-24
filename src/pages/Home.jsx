import InfoSection from '../components/InfoSection/InfoSection'
import NavBar from '../components/NavBar/NavBar'
import TopSection from '../components/TopSection/TopSection'
import { infoObjOne } from "../components/InfoSection/data";
import Resume from '../components/Resume/Resume';


const Home = () => {
  return (
    <>
    <NavBar />
    <TopSection/>
    <InfoSection {...infoObjOne}/>
    <Resume />
    </>
  )
}

export default Home