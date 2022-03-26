import React from 'react';
import client1 from '../images/client1.png';
import RouteDetail from './RouteDetail';
import styled from 'styled-components/macro';
import '../index.css';


const Main = styled.div`
 width: 100%;
 display: flex;
 max-width: 1100px; 
 grid-gap: 8px;
 margin: 0 auto;

@media screen and (max-width: 728px) {
    {
        display:block;
        padding-bottom:15px;
    }
}
`;

const SingleService = () => {
    return (
        <>
            <RouteDetail route="SERVICES" path="Home/Service/InteriorDesign" />
            <div className='about_main_head'>
                <h3><b>INTERIOR DESIGN</b></h3><br />
            </div>
            <Main>
                <div className="about_main_desc">

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                    </p>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                    </p>

                </div>

                <div className="about_main_header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '15px', paddingLeft: '15px' }}>
                    {/* <h2> Who We Are </h2> */}
                    <img src={client1} width="300" height="200" alt="Natural" style={{
                        outline: '1px solid white',
                        outlineOffset: '6px'
                    }} />
                </div>
            </Main>

        </>
    )
}

export default SingleService;
