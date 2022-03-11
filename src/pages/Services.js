import React from 'react';
import styled, { css } from 'styled-components/macro';
import service1 from '../images/client1.png';
import SingleService from '../component/SingleService';
import { Link, useNavigate } from 'react-router-dom';

const Main = styled.div`
 margin: 0px auto;
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
}
`;

const Services = () => {

    const navigate = useNavigate();

    return (
        <>
            <Main>
                <MainBottom>
                    <ImageBox>

                        <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice')} style={{ outline: '1px solid white', outlineOffset: '6px' }}></img>

                        <h3 style={{
                            textAlign: 'center',
                            color: '#feb70e',
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            margin: '25px 10px'
                        }}>Interior Services</h3>
                    </ImageBox>
                    <ImageBox >

                        <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice1')} style={{ outline: '1px solid white', outlineOffset: '6px' }}></img>

                        <h3 style={{
                            textAlign: 'center',
                            color: '#feb70e',
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            margin: '25px 10px'
                        }}>Interior Services</h3>
                    </ImageBox>
                    <ImageBox >

                        <img src={service1} width="322" height="215" alt="1" onClick={() => navigate('/singleservice2')} style={{ outline: '1px solid white', outlineOffset: '6px' }}></img>

                        <h3 style={{
                            textAlign: 'center',
                            color: '#feb70e',
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            margin: '25px 10px'
                        }}>Interior Services</h3>
                    </ImageBox>

                </MainBottom>
            </Main>
        </>
    )
}

export default Services;
