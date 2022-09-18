import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImgSlide from './components/ImgSlide';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <ScrollToTop />
            <Routes>
                  <Route path='/AniFull' element={<Cards/>}/>
                    <Route path='/' element={<ImgSlide/>}/>
            </Routes>
        <Footer/>
    </Router>
 </div>
    
  
  );
}

export default App;
