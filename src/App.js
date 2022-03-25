import React, { useState } from 'react';
import Navbar from './component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from './globalStyle';
import DropDown from './component/DropDown';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';
import About from './pages/About';
// import Gallery from './pages/Gallery';
import SingleService from './component/SingleService';
import SingleService1 from './component/SingleService1';
import SingleService2 from './component/SingleService2';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Toolbar from '@mui/material/Toolbar';
import Gallery from './pages/Gallery';

const theme = {};

function App(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };



  return (
    <>
      <GlobalStyle />
      <Toolbar id="back-to-top-anchor" style={{ background: '#000', minHeight: '0.5px' }} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/About" element={<About></About>}></Route>
        <Route exact path="/Service" element={<Services></Services>}></Route>
        <Route exact path="/Gallery" element={<Gallery ></Gallery>}></Route>
        <Route exact path="/Contact" element={<Contact></Contact>}></Route>
        <Route exact path="/singleservice" element={<SingleService></SingleService>}></Route>
        <Route exact path="/singleservice1" element={<SingleService1></SingleService1>}></Route>
        <Route exact path="/singleservice2" element={<SingleService2></SingleService2>}></Route>
      </Routes>
      <DropDown isOpen={isOpen} toggle={toggle} />

      <Footer />

      <ScrollTop {...props}>
        <Fab color="#333" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
