import { useState } from "react";
import '../style/homepage.css'
import { aboutSection1, aboutSection2, aboutSection3, aboutSection4 } from "../components/aboutsection/data/data";
import { Navbar, AboutSection, ContactUs } from "../components";
import img1 from '../images/img1.svg'
import img2 from '../images/img2.svg'
import img3 from '../images/img3.svg'
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} nav = {"main"} />
      <AboutSection aboutSection={aboutSection1} img={img1}/>
      <AboutSection aboutSection={aboutSection2} img={img2}/>
      <AboutSection aboutSection={aboutSection3} img={img3}/>
      <ContactUs/>
    </div>
  );
};

export default HomePage;