import React, { Component } from 'react';
import '../index.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <>
            <MDBContainer style={{ padding: '80px', color: '#feb70e' }}>
                <MDBRow start="0">
                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">CONTACT US</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Address :-
                            </label>
                            <p>118, Varni Plaza Near Sudama Chowk, Mota Varachha, Surat 395006</p>

                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Phone Number :-
                            </label>
                            <p>+9170412 22563</p>
                            <p>+9170412 22563</p>

                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Email :-
                            </label>
                            <p><a href="mailto:artrueinfotech@gmail.com" style={{ listStyleType: 'none', textDecoration: 'none', color: '#fff' }}>Artrue@gmailcom</a></p>

                            <br />
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Website :-
                            </label>
                            <p><a href="https://artrueinfotech.com/" target="_blank" style={{ listStyleType: 'none', textDecoration: 'none', color: '#fff' }}>www.artrue.com</a></p>
                        </form>
                    </MDBCol>


                    {/* <MDBContainer style={{ padding: '30px' }}> */}

                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">Write to us</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Your name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Subject
                            </label>
                            <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                            <br />
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                            <div className="text-center mt-4">
                                <MDBBtn color="warning" outline type="submit">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div class="map-responsive">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8401559619074!2d72.87771671493626!3d21.23818618588538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f900a37cf4d%3A0xb08d4f8ef02e76bf!2sVarni%20Plaza!5e0!3m2!1sen!2sin!4v1645878582970!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>

            </div>

        </>
    )
}

export default Contact





