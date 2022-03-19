import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import styled, { css } from 'styled-components/macro';
import Carousel, { Modal, ModalGateway } from "react-images";
import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/styles";
import Paper from '@mui/material/Paper';
import { photos } from "./photos";

const Hover = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: opacity 0.25s;

&:hover{
    opacity: 1;
    zoom: normal;
    cursor: pointer;
}
`;


const useStyles = makeStyles(theme => ({

    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    gallery: {
        background: "#333",
        border: '2px solid #333 !important'
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

    const columnNumber = 10;

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'white', borderBottom: '2px solid #feb70e' }}>GALLERY</h2>

            <Paper className={classes.paper}>
                {/* <Hover /> */}
                <Gallery margin={columnNumber} photos={photos} onClick={openLightbox} className={classes.gallery} />

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