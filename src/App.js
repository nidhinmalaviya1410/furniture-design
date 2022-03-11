import React, { useState } from 'react';
import Navbar from './component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from './globalStyle';
import Hero from './component/Hero';
import SliderData from './data/SliderData';
import DropDown from './component/DropDown';
import InfoSection from './component/InfoSection';
import InfoData from './data/InfoData';
import Product from './component/Product';
import ProductData from './data/ProductData';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import SingleService from './component/SingleService';
import SingleService1 from './component/SingleService1';
import SingleService2 from './component/SingleService2';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
        <Route exact path="/services" element={<Services></Services>}></Route>
        <Route exact path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        <Route exact path="/singleservice" element={<SingleService></SingleService>}></Route>
        <Route exact path="/singleservice1" element={<SingleService1></SingleService1>}></Route>
        <Route exact path="/singleservice2" element={<SingleService2></SingleService2>}></Route>
      </Routes>
      <DropDown isOpen={isOpen} toggle={toggle} />



      <Footer />
    </>
  );
}

export default App;
