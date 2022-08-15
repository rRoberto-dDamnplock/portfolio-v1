import Nav from './Components/Layout/Navigation/Nav';
import './App.css';
import Header from './Components/Layout/Header/Header';
import CarouselComp from './Components/UI/Carousel/CarouselComp';
import Skills from './Components/Layout/Skills/Skills';
import Tools from './Components/Layout/Skills/Tools/Tools';

function App() {
  return (
    <div className="App">
<Nav/>
<Header/>
<CarouselComp/>
<Skills/>
<Tools/>

    </div>
  );
}

export default App;
