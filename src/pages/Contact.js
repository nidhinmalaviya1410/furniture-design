import React, { useState } from 'react';
import '../index.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RouteDetail from '../component/RouteDetail';

const Contact = () => {

    const [data, setData] = useState({ defaultFormContactNameEx: '', defaultFormContactEmailEx: '', defaultFormContactSubjectEx: '', defaultFormContactMessageEx: '' });

    async function submit(e) {
        e.preventDefault();
        const response = await fetch(`https://artrueinfotech.com/furniture/mail/mail.php?defaultFormContactNameEx=${data.defaultFormContactNameEx}&defaultFormContactEmailEx=${data.defaultFormContactEmailEx}&defaultFormContactSubjectEx=${data.defaultFormContactSubjectEx}&defaultFormContactMessageEx=${data.defaultFormContactMessageEx}`);
        console.log(response.json);
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }


    return (
        <>
            <RouteDetail route="SERVICES" path="Home/Service" />
            <MDBContainer style={{ padding: '130px 80px 80px 80px', color: '#feb70e' }}>
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
                            <input type="text" id="defaultFormContactNameEx" className="form-control" value={data.name} onChange={(e) => handle(e)} />
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text" >
                                Your email
                            </label>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" value={data.email} onChange={(e) => handle(e)} />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text" >
                                Subject
                            </label>
                            <input type="text" id="defaultFormContactSubjectEx" className="form-control" value={data.subject} onChange={(e) => handle(e)} />
                            <br />
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text" >
                                Your message
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" value={data.msg} onChange={(e) => handle(e)} />
                            <div className="text-center mt-4">
                                <Button variant="contained" color="warning" onClick={(e) => submit(e)} endIcon={<SendIcon />}>
                                    Send
                                </Button>
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






