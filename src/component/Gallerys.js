import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/styles";
import Paper from '@mui/material/Paper';
import { photos } from "./photos";


const useStyles = makeStyles(theme => ({

    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    gallery: {
        margin: '15px',
    }
}));



const Gallerys = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const classes = useStyles();

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'white', borderBottom: '2px solid #feb70e' }}>GALLERY</h2>

            <Paper className={classes.paper}>
                <Gallery photos={photos} onClick={openLightbox} className={classes.gallery} />
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
            </Paper>
        </div>
    )
}

export default Gallerys;