import React from "react";
import '../index.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import main from '../images/about-main.jpg';

const PageRoute = styled.div`
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url(${main});
  display: flex;
  color: #fff;
  padding: 30px;
  padding-bottom: 10px;

  h2{
    display: flex;
    flex: 1 2 50%;
    font-weight: 600;

    @media screen and  (max-width:768px){
        font-size: 18px;
    }

    }
    
`;

const PathTop = styled.div`
  display: flex;
  align-self: flex-end;
  opacity:1;
  font-size: 12px;

@media screen and  (max-width:768px){
    font-size: 12px;
}

`;

const Path = styled.div`
letter-spacing: 1px;
text-transform: uppercase;
cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
color: ${props => (props.isClickable ? '#ffffff80' : 'default')};
&:hover {
    color: ${props => (props.isClickable && 'white')};
  }
`;



const RouteDetail = (props) => {
    const navigate = useNavigate();

    const pathArray = props.path.split('/');

    const handleClick = (path) => {
        console.log(path);
        if (path === 'Home') {
            navigate(`/`);
        } else {
            navigate(`/${path}`);
        }
    }
    return (
        <>
            <PageRoute>
                <h2>{props.route}</h2>
                <PathTop >
                    {pathArray.map((route, index) => (
                        <Path isClickable={index < pathArray.length - 1} onClick={index < pathArray.length - 1 ? () => handleClick(route) : () => {/* nothing to do */ }}>
                            {route}{index < pathArray.length - 1 && '/'}
                        </Path>
                    ))
                    }
                </PathTop>

            </PageRoute>
        </>
    )

}

export default RouteDetail;