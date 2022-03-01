import React from 'react';
import styled, { css } from 'styled-components/macro';
import service1 from '../images/client1.png';

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
    return (
        <>
            <Main>
                <MainBottom>
                    <ImageBox>
                        <a href="https://stackoverflow.com" style={{
                            padding: '6px',
                            border: '1px solid #EBEBEB'
                        }}>
                            <img src={service1} width="322" height="215" alt="1"></img>
                        </a>
                        <h3 style={{
                            textAlign: 'center',
                            color: '#f2b522',
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            margin: '15px 10px'
                        }}>Interior Services</h3>
                    </ImageBox>
                    <ImageBox >
                        <a href="https://stackoverflow.com" style={{
                            padding: '6px',
                            border: '1px solid #EBEBEB'
                        }}>
                            <img src={service1} width="322" height="215" alt="1"></img>
                        </a>
                        <h3 style={{
                            textAlign: 'center',
                            color: '#f2b522',
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            margin: '15px 10px'
                        }}>Interior Services</h3>
                    </ImageBox>
                    <ImageBox >
                        <a href="https://stackoverflow.com" style={{
                            padding: '6px',
                            border: '1px solid #EBEBEB'
                        }}>
                            <img src={service1} width="322" height="215" alt="1"></img>
                        </a>
                        <h3 style={{
                            textAlign: 'center',
                            color: '#f2b522',
                            fontFamily: 'Roboto',
                            fontWeight: '700',
                            fontStyle: 'normal',
                            textTransform: 'uppercase',
                            margin: '15px 10px'
                        }}>Interior Services</h3>
                    </ImageBox>

                </MainBottom>
            </Main>
        </>
    )
}

export default Services;
