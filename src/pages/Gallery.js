import React, { useState, useCallback } from 'react';

import Carousel, { Modal, ModalGateway } from "react-images";
import './contact.scss';
// import { readdir     } from 'fs';

const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600', 'https://source.unsplash.com/lVmR1YaBGG4/800x600', 'https://source.unsplash.com/5KvPQc1Uklk/800x600', 'https://source.unsplash.com/GtYFwFrFbMA/800x600', 'https://source.unsplash.com/Igct8iZucFI/800x600', 'https://source.unsplash.com/M01DfkOqz7I/800x600', 'https://source.unsplash.com/MoI_cHNcSK8/800x600', 'https://source.unsplash.com/M0WbGFRTXqU/800x600', 'https://source.unsplash.com/s48nn4NtlZ4/800x600', 'https://source.unsplash.com/E4944K_4SvI/800x600', 'https://source.unsplash.com/F5Dxy9i8bxc/800x600', 'https://source.unsplash.com/iPum7Ket2jo/800x600'
];

// const testFolder = '../images/';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

const Gallery = () => {


    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const renderImageContent = (src, index) => {
        return (
            <div onClick={(e) => openLightbox(e, index)}>
                <img src={src} key={index} />
            </div>
        )
    }


    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="gallery-container">
            <h2 style={{ color: '#feb70e', textAlign: 'center', marginTop: '30px' }}><b>GALLERY</b></h2><br />
            <div className="gallery-grid">
                {imgUrls.map(renderImageContent)}
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={imgUrls.map(renderImageContent).map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>

        </div>
    )
}

export default Gallery;

