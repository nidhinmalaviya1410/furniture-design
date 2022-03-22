import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import styled, { css } from 'styled-components/macro';
import Carousel, { Modal, ModalGateway } from "react-images";
import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/styles";
import Paper from '@mui/material/Paper';
import { photos } from "./photos";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
var find = require('list-files');
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

    const openLightbox = (index, photo) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const columnNumber = 10;
    console.log("meet 1");
    // find(function(result){
    //     console.log(result);
    // },{
    //     dir:'images'
    // });
    // const fs = require('fs');
    // const dir = '../images'
    // const files = fs.readdirSync(dir);
    // for (const file of files) {
    //     console.log(file);
    // }

    function importAll(r) {
        return r.keys();
    }

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    console.log(images);
    return (
        <div>
            {/* <h2 style={{ textAlign: 'center', color: 'white', borderBottom: '2px solid #feb70e' }}>GALLERY</h2>

            <Paper className={classes.paper}>
                {/* <Hover /> */}
            {/* <Gallery margin={columnNumber} photos={photos} onClick={openLightbox} className={classes.gallery} />  */}


            <div className="gallery-container">
                <h2 style={{ textAlign: 'center', color: 'white', borderBottom: '2px solid #feb70e', fontWeight: 'bold' }}>GALLERY</h2><br />
                <div className="gallery-grid">
                    {photos.map((photo, index) => {
                        return (
                            <React.Fragment>
                                <div className='imageContainer'>
                                    <img src={photo.src} key={index} />
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
                {/* </Paper> */}
            </div>
        </div>
    )
}

export default Gallerys;