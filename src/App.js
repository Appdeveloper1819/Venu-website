import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/About';
import Features from './components/pages/Features';
import CTA from './components/pages/CTA';
import Pricing from './components/pages/Pricing';
import ScrollTop from './components/pages/ScrollTop';
import Products from './components/pages/Products';
import Blogs from './components/pages/Blogs';
import TryDemo from './components/TryDemo/TryDemo';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import ContactPage from './components/pages/Contact';
import Register from './components/pages/Register';

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/trydemo', '/navbar'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <div>
      <ScrollToTop/>
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Products />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/trydemo" element={<TryDemo />} />
        <Route path="/navbar" element={<Navbar />} />
        {/* <Route path='/contact' element={<ContactPage/>} /> */}
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
      <ScrollTop />
    </div>
  );
}

export default App;
