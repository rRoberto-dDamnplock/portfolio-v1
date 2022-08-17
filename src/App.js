import Nav from './Components/Layout/Navigation/Nav';
import './App.css';
import Header from './Components/Layout/Header/Header';
import CarouselComp from './Components/UI/Carousel/CarouselComp';
import Skills from './Components/Layout/Skills/Skills';
import Tools from './Components/Layout/Skills/Tools/Tools';
import AboutMe from './Components/Layout/About me/AboutMe';
import Contact from './Components/Layout/Contact/Contact';
import Footer from './Components/Layout/Footer/Footer';

function App() {
  return (
    <>
    <div className="App">
   
<Nav/>
<Header/>
<CarouselComp/>
<Skills/>
<Tools/>
<AboutMe/>
<Contact/>

<Footer/>
</div>
</>
    
  );
}

export default App;
