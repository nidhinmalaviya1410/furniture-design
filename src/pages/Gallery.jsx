import React, { useState } from 'react';

import Carousel, { Modal, ModalGateway } from "react-images";
import './contact.scss';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RouteDetail from '../component/RouteDetail';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCaterory, addPathName } from '../component/Reducer/action';

import { useNavigate } from 'react-router-dom';


const Gallery = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dispatch1 = useDispatch();
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [categorySelected, setCategory] = useState("All");

    const [pathName, setPathName] = useState("Home /Gallery");

    function importAll(r) {
        return r.keys();
    }
    let categoryList = [];
    let images = importAll(require.context("./Categories", true, /\.(png|jpe?g|svg)$/));
    let staticPhotos = [];

    images.forEach(image => {
        let lastOccure = image.lastIndexOf('/');
        let secondLastOccure = image.lastIndexOf('/', lastOccure - 1);

        if (lastOccure > 0 && secondLastOccure > 0) {
            let category = image.substring(secondLastOccure + 1, lastOccure);
            if (categoryList.indexOf(category) === -1) {
                categoryList.push(category);
            }
            staticPhotos.push({
                src: `./Categories/${category}/${image.substring(lastOccure + 1)}`,
                category: category
            });
        }
    });

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

        dispatch(selectedCaterory(photo + '$_$' + pathName + '/' + photo));

        setPathName(pathName + '/' + photo);
        setCategory(photo.category);
        navigate(index);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const marginValue = isAll ? '50px' : 0;
    return (
        <>
            <RouteDetail route="GALLERY" path={pathName} />
            <div className="gallery-container">

                <div className="gallery-grid">
                    {categoryPhotos.map((photo, index) => {
                        return (
                            <React.Fragment>
                                <div className='imageContainer'>
                                    <img src={require(`${photo.src}`).default} alt={index} />
                                    <div className='mybtnwrapper'>
                                        <div className='mybtn'>
                                            {isAll && (<ArrowCircleRightIcon fontSize='large' onClick={() => openCategory('/SubCategory', photo.category)} style={{ marginRight: '52px', position: 'absolute' }}>Category</ArrowCircleRightIcon>)}
                                            <AddCircleOutlineIcon fontSize='large' onClick={() => openLightbox(index, photo)} style={{ marginLeft: marginValue, position: 'absolute' }}>add_circle</AddCircleOutlineIcon>
                                            <h4>{photo.category}</h4>
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
                                    src: require(`${x.src}`).default,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

            </div>
        </>
    )
}

export default Gallery;
