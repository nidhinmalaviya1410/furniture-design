import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <>
            {/* <div className="container">
                <ContactInfo>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between" style={{ columnGap: 20 }}>
                            <div className=" col-md-4 ContactInfoMain">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" height="20px" alt="phone"></img>
                                <div className="contact_info_content pl-1">
                                    <div className="contact_info_title">Phone</div>
                                    <div className="contact_info_title">+9651445551</div>
                                </div>
                            </div>
                            <div className="col-md-4 ContactInfoMain">
                                <img src="https://img.icons8.com/office/24/000000/email.png" height="20px" alt="phone"></img>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">Email</div>
                                    <div className="contact_info_title">+Xyz@gmail.com</div>
                                </div>
                            </div>
                            <div className=" col-md-4 ContactInfoMain">
                                <img src="https://img.icons8.com/office/24/000000/address.png" height="20px" alt="phone"></img>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">Address</div>
                                    <div className="contact_info_title">Surat , Gujrat</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </ContactInfo>
            </div>


            {/* // contact form */}
            {/* <div className="container">
                <ContactForm>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 get">
                            <div className="contact_form_container py-5">Get In Touch</div>

                            <div className="form">
                                <form id="contact-form">
                                    <div className="col-sm-4 contact_form_name d-flex justify-content-between align-items-between">
                                        <input type="text" className="contact_form_name inpuft_filed" placeholder="Your Name" required="true"></input>
                                        <input type="text" className="contact_form_email inpuft_filed" placeholder="Your Email" required="true"></input>
                                        <input type="number" className="contact_form_number inpuft_filed" placeholder="Your Phone Number" required="true"></input>
                                    </div>
                                    <div className="contact_form_text mt-4">
                                        <textarea cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className="btn btn-primary">Submit Us</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </ContactForm>
            </div> */}

            <MDBContainer style={{ padding: '30px' }}>
                <MDBRow center="0">
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

