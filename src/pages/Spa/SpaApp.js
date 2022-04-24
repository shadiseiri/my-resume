// import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function SpaApp() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>




  );
}

export default SpaApp;
