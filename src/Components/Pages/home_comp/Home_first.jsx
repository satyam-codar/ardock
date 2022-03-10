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
                    <h1 className="first">
                      Ardock
                    </h1>
                    <h1 className="second"> 
                    foundations
                    </h1>
                    <h2>
                      Ullamcorper malesuada proin libero nunc. Id semper risus in hendrerit gravida. Vulputate  sagittis aliquam malesuada bibendum. 
                    </h2>
                    <div className="first_home_button">
                      <Stack direction="row" spacing={2}>
                        <Button className="butoutlined"  color="secondary">
                          Book free trial
                        </Button>
                        <Button variant="outlined" color="secondary">
                          Contact Us
                        </Button>
                      </Stack>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="first_image">
                    {/* <div className="relback">
                      <img src="/Images/blob.svg" alt="" />
                    </div> */}
                    <div className="childimage">
                      {/* <img src="images/children.jpg" alt="" /> */}
                    </div>
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
