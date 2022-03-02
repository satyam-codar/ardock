import React, { Component } from "react";

import "./Home_com.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export class Home_first extends Component {
  render() {
    return (
      <div>
        <div className="home_first">
          <div className="container">
            <div className="fur_home">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="first_content">

                    <h1>
                      Foundation for <br /> early childhood education
                    </h1>
                    <h2>
                      Environment to explore, crete and learn best through play
                    </h2>
                    <div className="first_home_button">
                      <Stack direction="row" spacing={2}>
                        <Button color="secondary">
                          Book free trial
                        </Button>
                        {/* <Button variant="contained" color="success">
                      Success
                    </Button> */}
                        <Button variant="outlined" color="error">
                          Contact Us
                        </Button>
                      </Stack>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="first_image">
                    <img src="images/camera.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home_first;
