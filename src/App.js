import './App.css';
import Header from './components/header/Header';
import HeroBanner from './components/herobanner/HeroBanner';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Specs from './components/specs/Specs';
import About from './components/about/About';
import Products from './components/products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Castor from './components/Castor';
import Maintenance from './components/Maintenance';
import Aboutus from './components/pages/aboutus/Aboutus';
import Upcoming from "./components/pages/upcoming/Upcoming"

function App() {
  return (

   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <HeroBanner />
            {/* <Specs /> */}
            <Products />
            <Features />
            {/* <About /> */}
            <Footer />
          </>} 
        />
        <Route path='/products' element={<Upcoming />} />
        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
     
   </>
  );
}

export default App;
