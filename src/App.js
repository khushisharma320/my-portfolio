import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function App() {
  
  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: true, // Only once animation
    });
    }, []);

  return (
    <>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </>

  );
}

export default App;
