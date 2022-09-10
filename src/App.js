import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImgSlide from './components/ImgSlide';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div  className="Container4">
        <ImgSlide />
      {/* <Cards/> */}
      <div className="Container5"> 
      <Footer/>
      </div>
      
      </div>
    
      </div>
    
  
  );
}

export default App;
