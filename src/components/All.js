import React,{useState,useEffect} from 'react'
import { Element } from 'react-scroll';
import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import About from './About'
import Team from './Team'
import Contact from './Contact '
import Footer from './Footer'

function All() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust the scroll distance as needed
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className={`All ${scrolled ? 'scrolled' : ''}`}>
    <Header />

    
    <Element name="home">
      <Home />
    </Element>
    <Skills/>
    <Element name="about">
    <About/>

   
    </Element>
    <Element name="team">
      <Team/>
    </Element>
   
    <Element name="contact">
     <Contact/>
    </Element>
  

    <Footer/>

   
   
 
   
  </div>
  )
}

export default All
