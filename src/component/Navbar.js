import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import MenuData from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import '../index.css';


const Nav = styled.nav`
height:80px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
width:100%; 
background:transparent;
position: fixed;
font-size: 1rem;
z-index: 30;
transition: 0.8s all ease
   
`;

const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
font-weight:bold;
text-decoration:none;

`;

const Logo = styled(Link)`
${NavLink}
font-style:italic;
`;


const MenuBars = styled(FaBars)`
    display:none;
    height: 30px;
    color: #fff;
    cursor:pointer;

    @media screen and (max-width: 768px){
    display:block;
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink};

&:hover{
  transition: all ease-in-out .2s;
  color: #fff;
  border-bottom: 1px solid #feb70e;
    
}

`;

const NavBtn = styled.div`
 display:flex;
 align-items:center;
 border:2px solid #ffc451;
 margin-right:48px;
 display:flex;
 justify-content:;

 @media screen and (max-width: 768px){
    display:none;
}
`;


const Navbar = ({ toggle }) => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY > 310) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return (
        <>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'} >
                <Logo to='/'>Furtine</Logo>
                <MenuBars onClick={toggle} />
                <NavMenu >

                    {MenuData.map((item, index) => {
                        return (
                            <NavMenuLinks to={item.link} key={index}>
                                {item.title}
                            </NavMenuLinks>

                        );

                    })
                    }
                    {/* <NavMenuLinks to="/" exact activeClassName="menu_active" >HOME</NavMenuLinks>
                    <NavMenuLinks to="/about" activeClassName="menu_active" >ABOUT US</NavMenuLinks>
                    <NavMenuLinks to="/services" activeClassName="menu_active">SERVICES</NavMenuLinks>
                    <NavMenuLinks to="/gallery" activeClassName="menu_active" >GALLERY</NavMenuLinks> */}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' style={{ color: 'white', fontWeight: 'bold', textTransform: 'capitalize' }} >Contact Us</Button>
                </NavBtn>
            </Nav>

        </>
    )
}

export default Navbar;