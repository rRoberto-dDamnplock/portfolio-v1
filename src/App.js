import Nav from './Components/Layout/Navigation/Nav';
import './App.css';
import Header from './Components/Layout/Header/Header';
import CarouselComp from './Components/UI/Carousel/CarouselComp';
import Skills from './Components/Layout/Skills/Skills';
import Tools from './Components/Layout/Skills/Tools/Tools';
import AboutMe from './Components/Layout/About me/AboutMe';
import Contact from './Components/Layout/Contact/Contact';
import Footer from './Components/Layout/Footer/Footer';
import Modal from './Components/UI/Modal'
import ReactSwitch from 'react-switch'
import { createContext, useState } from 'react';
export const ThemeContext = createContext(null)

function App() {
const [theme, setTheme ] = useState('light')

const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
};

  return (



    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    
    <div className="App" id={theme} data-aos='fade-up' >
   {/* <Modal> */}
  
<Nav/>
<ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
<Header/>
<CarouselComp/>
<Skills/>
<Tools/>
<AboutMe/>
<Contact/>

<Footer/>
</div>
{/* </Modal> */}


</ThemeContext.Provider>
    
  );
}

export default App;
