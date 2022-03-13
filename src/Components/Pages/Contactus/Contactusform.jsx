import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import $ from 'jquery';

const FormPage = () => {
    const PostToGoogle = async (e) => {
        e.preventDefault();
        var field1 = $("#nameField").val();
        var field2 = $("#emailField").val();
        var field3 = $("#mobField").val();
        var field4 = $("#cinema").val();

        if (field1 === "") {
            alert('Please Fill Your Name');
            document.getElementById("nameField").focus();
            return false;
        }
        if (field2 === "") {
            alert('Please Fill Your Email');
            document.getElementById("emailField").focus();
            return false;
        }
        if (field3 === "" 
        // || field3.length > 10 || field3.length < 10
        ) {
            alert('Please Fill Your Mobile Number');
            document.getElementById("mobField").focus();
            return false;
        }


        $.ajax({
            url: "https://docs.google.com/forms/u/5/d/e/1FAIpQLSeytHwjpqu2T_kwvLYbkEU4MH7erHEPypW4omWpjT2Be6EYwA/formResponse?",
            // url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSchGAXI0z8Qsw0na34X-zQwWRc5srn9cmFgkAClYVSrIdcDgg/formResponse?",
            data: { "entry.1481576165": field1, "entry.132917256": field2, "entry.1116563792": field3, "entry.1439449117": field4 },
            type: "POST",
            dataType: "xml",
            success: function (d) {
            },
            error: function (x, y, z) {

                $('#success-msg').show();
                $('#form').hide();

            }
        });
        return false;
    };

    return (
        <MDBContainer className="upr"       >
            <MDBRow    className="upr3" >
                <MDBCol md="12">
                    <MDBCard className="upr2">
                        <MDBCardBody className="upr1" >
                            <form id="form" target="_self" onSubmit={PostToGoogle} action="" autocomplete="off" >
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
                                        id="nameField" 
                                        name="entry.1958936365"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        id="emailField" 
                                        name="entry.732086521" 
                                    />
                                    <MDBInput id="mobField" name="entry.556343013"  label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                    <MDBInput id="cinema" name="entry.555471935" type="textarea" rows="5" label="Your message" icon="pencil-alt" group  validate error="wrong" success="right"/>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <div className="firstbut">
                                        <Stack direction="row" spacing={2}>
                                            <Button color="secondary" id="send" type="submit" value="Submit" >
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
                            <h3 id="success-msg">Your Request has been posted to Google Spreadsheet</h3>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;