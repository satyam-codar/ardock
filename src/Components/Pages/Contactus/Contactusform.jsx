import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const FormPage = () => {
    return (
        <MDBContainer className="upr"       >
            <MDBRow    className="upr3" >
                <MDBCol md="12">
                    <MDBCard className="upr2">
                        <MDBCardBody className="upr1" >
                            <form>
                                {/* <h1 className="text-center py-4">Sign up</h1> */}
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                    <MDBInput type="textarea" rows="5" label="Your message" icon="pencil-alt" group  validate error="wrong" success="right"/>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <div className="firstbut">
                                        <Stack direction="row" spacing={2}>
                                            <Button color="secondary">
                                                Submit
                                            </Button>
                                        </Stack>
                                    </div>
                                    {/* <MDBBtn outline color="info">
                                        Send
                                        <MDBIcon far icon="paper-plane" className="ml-1" />
                                    </MDBBtn> */}
                                    {/* <MDBBtn color="cyan" type="submit">
                                        Register
                                    </MDBBtn> */}
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;