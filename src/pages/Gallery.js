import React, { useState, useCallback } from 'react';

import Carousel, { Modal, ModalGateway } from "react-images";
import './contact.scss';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { staticPhotos, categoryList } from './staticPhotos';


const Gallery = () => {


    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [categorySelected, setCategory] = useState("All");

    let categoryPhotos = staticPhotos;
    let isAll = true;
    if (categorySelected === "All") {
        categoryPhotos = categoryList.map(categorys => staticPhotos.find(ph => ph.category === categorys));
    } else {
        isAll = false;
        categoryPhotos = staticPhotos.filter(catePhoto => catePhoto.category === categorySelected);
    }

    const openLightbox = (index, photo) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const openCategory = (index, photo) => {
        setCategory(photo.category);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className="gallery-container">
            <h2 style={{ color: '#feb70e', textAlign: 'center', marginTop: '30px' }}><b>GALLERY</b></h2><br />
            <div className="gallery-grid">
                {categoryPhotos.map((photo, index) => {
                    return (
                        <React.Fragment>
                            <div className='imageContainer'>
                                <img src={photo.src} key={index} />
                                <div className='mybtnwrapper'>
                                    <div className='mybtn'>
                                        {isAll && (<ArrowCircleRightIcon fontSize='large' onClick={() => openCategory(index, photo)}>Category</ArrowCircleRightIcon>)}
                                        <AddCircleOutlineIcon fontSize='large' onClick={() => openLightbox(index, photo)} >add_circle</AddCircleOutlineIcon>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>)
                })}
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={categoryPhotos.map(x => ({
                                src: x.src,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>

        </div>
    )
}

export default Gallery;

