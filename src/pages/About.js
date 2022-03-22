import React from 'react';
import RouteDetail from '../component/RouteDetail';
import client1 from '../images/client1.png';
import client2 from '../images/client21.png';
import client3 from '../images/client31.png';
import client4 from '../images/client41.png';
import client5 from '../images/client51.png';
import '../index.css';

const About = () => {
    return (
        <>

            <RouteDetail route="ABOUT US" path="Home/About" />

            <div className="container-fulid" style={{ width: '100%', height: 'auto' }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about_main">
                            <div className="row">
                                <div className="col-md-8 about_main_desc">

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                    </p>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                                    </p>

                                </div>

                                <div className="col-md-4 about_main_header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <h2> Who We Are </h2> */}
                                    <img src={client1} width="300" height="200" alt="Natural" style={{
                                        outline: '1px solid white',
                                        outlineOffset: '6px'
                                    }} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 customer">
                        <h3>Our Customer</h3>
                        <marquee behavior="scroll" direction="left" padding="15px" >
                            <img src={client1} width="250" height="180" alt="Natural" />
                            <img src={client2} width="250" height="180" alt="Natural" />
                            <img src={client3} width="250" height="180" alt="Natural" />
                            <img src={client4} width="250" height="180" alt="Natural" />
                            <img src={client5} width="250" height="180" alt="Natural" />
                        </marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
