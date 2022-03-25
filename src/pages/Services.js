import React from 'react';
import styled, { css } from 'styled-components/macro';
import service1 from '../images/client1.png';
import RouteDetail from '../component/RouteDetail';
import { Link, useNavigate } from 'react-router-dom';

const Main = styled.div`
 margin: 60px auto;
 max-width: 1140px;
 width: 100%;
 height:100%;

 &:after{
    content: "";
    display: table;
    clear: both;
 }

 @media screen and (max-width: 768px){
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top: 80px !important;
}

`;

const MainBottom = styled.div`
    
    padding: 30px 20px;
    background-color: #333333;
    height:100%;

`;

const ImageBox = styled.div`
    width: 33.33%;
    float:left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing:border-box;
    margin-top: 50px;

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
                <MainBottom>
                    <ImageBox>

                        <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice')} style={{ outline: '1px solid white', outlineOffset: '6px', cursor: 'pointer' }}></img>

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

                        <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice1')} style={{ outline: '1px solid white', outlineOffset: '6px', cursor: 'pointer' }}></img>

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

                        <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice2')} style={{ outline: '1px solid white', outlineOffset: '6px', cursor: 'pointer' }}></img>

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

                </MainBottom>
            </Main>
        </>
    )
}

export default Services;
