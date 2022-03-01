import React from 'react';
import One from '../images/person_1.jpg';
import Two from '../images/person_2.jpg';
import Three from '../images/person_3.jpg';
import Four from '../images/about-second.jpg';
import client1 from '../images/client1.png';
import client2 from '../images/client21.png';
import client3 from '../images/client31.png';
import client4 from '../images/client41.png';
import client5 from '../images/client51.png';
import '../index.css';

const About = () => {
    return (
        <>
            <div className="container-fulid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about_main">
                            <div className="row">
                                <div className="col-md-4 about_main_header">
                                    {/* <h2> Who We Are </h2> */}
                                    <img src={client1} width="300" height="200" alt="Natural" style={{
                                        position: 'absolute',
                                        top: '150px',
                                        left: '110px'
                                    }} />
                                </div>
                                <div className="col-md-8 about_main_desc">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* <div className="about_content">
                            <div className="container">
                                <div className="row">
                                    <h2 className="our_team" style={{ marginTop: 20 }}> Our Team</h2>
                                    <div className="col-md-4">
                                        <div className="our_team_img">

                                            <img src={One} alt="person" className="center"></img>
                                            <p>Stephen Robbin</p>
                                            <p>CEO</p>
                                            <div className="our_team_img_social">
                                                <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                                                <span><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                                                <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="our_team_img">

                                            <img src={Two} alt="person" className="center"></img>
                                            <p>Michel Joy</p>
                                            <p>Manager</p>
                                            <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                                            <span><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                                            <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="our_team_img">

                                            <img src={Three} alt="person" className="center"></img>
                                            <p>Stephen Robbin</p>
                                            <p>Advertize Manager</p>
                                            <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                                            <span><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                                            <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="container-fulid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about_second">
                            <div className="row">
                                <div className="col-lg-5 about_second_img">
                                    <img src={Four} alt="pic" height="400" ></img>
                                </div>


                                <div className="col-lg-7 d-flex justify-content-around float-left">
                                    <div className="col-lg-4 about_second_des">
                                        <h4>65</h4>
                                        <p>Homes</p>
                                        <br></br><br></br>
                                        <h4>55</h4>
                                        <p>Products</p>
                                    </div>
                                    <div className="col-lg-4 about_second_des">
                                        <h4>150</h4>
                                        <p>Interior</p>
                                        <br></br><br></br>
                                        <h4>40+</h4>
                                        <p>Sofa</p>
                                    </div>
                                    <div className="col-lg-4 about_second_des">
                                        <h4>30+</h4>
                                        <p>Happy Customer</p>
                                        <br></br><br></br>
                                        <h4>20</h4>
                                        <p>Country</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 customer">
                        <h3>Our Customer</h3>
                        <marquee behavior="scroll" direction="left" >
                            <img src={client1} width="220" height="150" alt="Natural" />
                            <img src={client2} width="220" height="150" alt="Natural" />
                            <img src={client3} width="220" height="150" alt="Natural" />
                            <img src={client4} width="220" height="150" alt="Natural" />
                            <img src={client5} width="220" height="150" alt="Natural" />
                        </marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
