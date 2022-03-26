import React from 'react';
import styled, { css } from 'styled-components/macro';
import service1 from '../images/client1.png';
import RouteDetail from '../component/RouteDetail';
import { Link, useNavigate } from 'react-router-dom';

const Main = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(1, 1fr);
 max-width: 1200px; 
 grid-gap: 8px;
 margin: 0 auto;

 @media screen and (max-width: 600px) {
    {
        grid-template-columns: repeat(1, 1fr);
    }
}
 @media screen and (min-width: 600px) {
    {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 649px) {
    {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 900px) {
    {
        grid-template-columns: repeat(3, 1fr);
    }
}

//  @media screen and (max-width: 768px){
//     width:100%;
//     display:flex;
//     flex-direction:column;
//     margin-top: 80px !important;
// }

`;

const ImageBox = styled.div`
    
    padding-left: 15px;
    padding-right: 15px;
    box-sizing:border-box;
    margin-top: 50px;
    text-align: center;

    @media screen and (max-width: 768px){
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0;
    margin-top: 20px;
    align-items: center;

}

    @media screen and (max-width: 913px){
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0;
    margin-top: 20px;
    align-items: center;
`;

const Services = () => {

    const navigate = useNavigate();

    return (
        <>
            <RouteDetail route="SERVICES" path="Home/Service" />
            <Main>
                <ImageBox>
                    <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice')}></img>
                    <h4 style={{
                        textAlign: 'center',
                        color: '#feb70e',
                        fontFamily: 'Roboto',
                        fontWeight: '700',
                        fontStyle: 'normal',
                        textTransform: 'uppercase',
                        margin: '25px 10px'
                    }}>Interior Services</h4>
                </ImageBox>
                <ImageBox >

                    <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice1')}></img>

                    <h4 style={{
                        textAlign: 'center',
                        color: '#feb70e',
                        fontFamily: 'Roboto',
                        fontWeight: '700',
                        fontStyle: 'normal',
                        textTransform: 'uppercase',
                        margin: '25px 10px'
                    }}>TURNKEY SERVICES</h4>
                </ImageBox>
                <ImageBox >

                    <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice2')}></img>

                    <h4 style={{
                        textAlign: 'center',
                        color: '#feb70e',
                        fontFamily: 'Roboto',
                        fontWeight: '700',
                        fontStyle: 'normal',
                        textTransform: 'uppercase',
                        margin: '25px 10px'
                    }}>FURNITURE AND SOFA</h4>
                </ImageBox>
            </Main>
        </>
    )
}

export default Services;
