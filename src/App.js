import './App.css';
import Header from './components/header/Header';
import HeroBanner from './components/herobanner/HeroBanner';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Specs from './components/specs/Specs';
import About from './components/about/About';
import Products from './components/products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maintenance from './components/Maintenance';
import Aboutus from './components/pages/aboutus/Aboutus';
import Upcoming from "./components/pages/upcoming/Upcoming"
import Categories from './components/pages/categories/Categories';
import { Details } from '@mui/icons-material';
import DetailsPage from './components/pages/detailspage/DetailsPage';
import CartContextProvider from './components/contexts/CartContextProvider';
import Terms from './components/terms/Terms';
import Shipping from './components/shippingPolicy/Shipping';
import Refund from './components/refundPolicy/Refund';
import Dealers from './components/dealersAndDistributers/Dealers';
import Order from './components/order/Order';
import Privacy from './components/privacy/Privacy';
import ContactUs from './components/pages/contactus/ContactUs';
import Deal from './components/Dealer/Deal';
import Success from './components/pages/success/Success';

function App() {
  return (

   <>
   <CartContextProvider>
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
              <Deal />
              <Footer />
            </>} 
          />
          <Route path='/products' element={<Upcoming />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/shop' element={<Categories />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/refund' element={<Refund />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/order" element={<Order />} />
          <Route path='/dealers' element={<Dealers />} />
          <Route path="/tv/:series" element={<DetailsPage />} />
          <Route path="/thankyou" element={<Success />} />
      </Routes>
    </BrowserRouter>
   </CartContextProvider>
   </>
  );
}

export default App;
