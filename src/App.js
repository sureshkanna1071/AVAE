import './App.css';
import Header from './components/header/Header';
import HeroBanner from './components/herobanner/HeroBanner';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Specs from './components/specs/Specs';
import About from './components/about/About';

function App() {
  return (
   <>
     <Header />
     <HeroBanner />
     <Specs />
     <Features />
     {/* <About /> */}
     <Footer />
   </>
  );
}

export default App;
