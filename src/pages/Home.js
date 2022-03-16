import React from 'react';
import Hero from '../component/Hero';
import SliderData from '../data/SliderData';
import InfoSection from '../component/InfoSection';
import InfoData from '../data/InfoData';
import '../index.css';
import Gallerys from '../component/Gallerys';
import Testimonial from '../component/Testimonial';
import Header from '../component/Header';
// import PropTypes from 'prop-types';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Zoom from '@mui/material/Zoom';

const Home = () => {

    // function ScrollTop(props) {
    //     const { children, window } = props;
    //     // Note that you normally won't need to set the window ref as useScrollTrigger
    //     // will default to window.
    //     // This is only being set here because the demo is in an iframe.
    //     const trigger = useScrollTrigger({
    //         target: window ? window() : undefined,
    //         disableHysteresis: true,
    //         threshold: 100,
    //     });

    //     const handleClick = (event) => {
    //         const anchor = (event.target.ownerDocument || document).querySelector(
    //             '#back-to-top-anchor',
    //         );

    //         if (anchor) {
    //             anchor.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'center',
    //             });
    //         }
    //     };

    //     return (
    //         <Zoom in={trigger}>
    //             <Box
    //                 onClick={handleClick}
    //                 role="presentation"
    //                 sx={{ position: 'fixed', bottom: 16, right: 16 }}
    //             >
    //                 {children}
    //             </Box>
    //         </Zoom>
    //     );
    // }

    // ScrollTop.propTypes = {
    //     children: PropTypes.element.isRequired,
    //     /**
    //      * Injected by the documentation to work in an iframe.
    //      * You won't need it on your project.
    //      */
    //     window: PropTypes.func,
    // };

    return (
        <div>

            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
            {/* <Product heading='Choose your favorite' data={ProductData}></Product> */}
            <Gallerys />
            <Testimonial />

            {/* <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> */}
        </div>
    )
}

export default Home;
