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
import { Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={() => <Home></Home>}></Route>
        <Route exact path="/about" component={() => <About></About>}></Route>
        <Route exact path="/services" component={() => <Services></Services>}></Route>
        <Route exact path="/contact" component={() => <Contact></Contact>}></Route>
      </Switch>
      <DropDown isOpen={isOpen} toggle={toggle} />



      <Footer />
    </>
  );
}

export default App;
