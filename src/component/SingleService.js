import React from 'react';
import client1 from '../images/client1.png';
import '../index.css';

const SingleService = () => {
    return (
        <>
            <div className="container-fulid" style={{ width: '100%', height: 'auto' }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about_main">
                            <div className="row" style={{ padding: '100px' }}>
                                <div className="col-md-8 about_main_desc">
                                    <h3><b>INTERIOR DESIGN</b></h3><br />
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

                                    }} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleService;
