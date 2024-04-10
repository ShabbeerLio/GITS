
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>  
  );
}

export default App;
