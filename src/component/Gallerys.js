import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import ModalImage from "react-modal-image";
var listOfImages = [];


const Gallerys = () => {



    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'white', borderBottom: '2px solid #feb70e' }}>GALLERY</h2>

            <Gallery photos={photos}>

            </Gallery>
        </div>
    )
}

export default Gallerys;