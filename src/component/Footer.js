import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components/macro';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../index.css';

const MainFooter = styled.div`
  color: white;
  background-color: #43474d;
  padding-top: 3em;
  position: relative;
  bottom: 0;
  width: 100%;
  clear: both;
`;

const Footer = () => {
    return (
        <MainFooter>
            <div className="container">
                <div className="row m-footer">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Furtine</h4>
                        <ui className="list-unstyled">
                            <li>04 , King Adda Center</li>
                            <li>NewYork , USA </li>
                            <li><span>Phone</span>: +80200025</li>
                            <li>FurtineHome@gmail.com</li>
                        </ui>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4>Links</h4>
                        <ul className="list-unstyled">
                            <li><NavLink to="/" className="navlink">Home</NavLink></li>
                            <li><NavLink to="/About" className="navlink">About</NavLink></li>
                            <li><NavLink to="/Service" className="navlink">Services</NavLink></li>
                            <li><NavLink to="/Gallery" className="navlink">Gallery</NavLink></li>
                            <li><NavLink to="/Contact" className="navlink">Contact</NavLink></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Our Product</h4>
                        <ui className="list-unstyled">
                            <li>Chair</li>
                            <li>Sofa Chair</li>
                            <li>Gamer Chair</li>
                            <li>Dining Table</li>
                            <li>Tipoi</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Our Newsletter</h4>
                        <ui className="list-unstyled">
                            <li>Our goal is to follow our values and give the best and user friendly solution to the customer.We just follow a tag line "You think , We build".

                            </li>
                        </ui>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm text-center">
                        &copy;{new Date().getFullYear()} Furtine Home | All rights reserved |
                        Terms Of Service
                    </p>
                </div>
            </div>
        </MainFooter>
    );
}

export default Footer;