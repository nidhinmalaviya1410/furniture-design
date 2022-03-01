import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
var listOfImages = [];


const Gallerys = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>GALLERY</h2>
            <Gallery photos={photos} />

        </div>
    )
}

export default Gallerys;