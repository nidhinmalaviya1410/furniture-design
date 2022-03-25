import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Gallerys = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);


    const openLightbox = (index, photo) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    function importAll(r) {
        return r.keys();
    }

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    console.log(images);
    return (
        <div>

            <div className="gallery-container1">
                <h2 style={{ textAlign: 'center', color: 'white', borderBottom: '2px solid #feb70e', fontWeight: 'bold' }}>GALLERY</h2><br />
                <div className="gallery-grid">
                    {photos.map((photo, index) => {
                        return (
                            <React.Fragment>
                                <div className='imageContainer'>
                                    <img src={photo.src} alt={index} />
                                    <div className='mybtnwrapper'>
                                        <div className='mybtn'>
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
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

            </div>
        </div>
    )
}

export default Gallerys;