import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import MenuData from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import Contact from '../pages/Contact';
import '../index.css';


const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
position:fixed;
z-index:100;
width:100%; 
background:#000;
`;

const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
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
    color: #fff;
  border-bottom: 1px solid rgb(165, 120, 53);
    
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
    return (
        <>

            <Nav>
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
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' >Contact Us</Button>
                </NavBtn>
            </Nav>

        </>
    )
}

export default Navbar;