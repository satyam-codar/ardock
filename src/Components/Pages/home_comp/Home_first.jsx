import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                <div className="col-md-12 col-lg-6 col-xl-6">
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
                      <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }} spacing={1}>
                        <Button className="butoutlined" color="secondary">
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSelDZs8ZQMX9cMqJcKtjTmcetD8BP4tkJMcKS7Ajnsd3Kh-qg/viewform?usp=sf_link" target="_blank" >
                            Book free trial
                          </a>
                        </Button>
                      {/* </Stack>
                      <Stack direction="row" spacing={2}> */}
                        <Button variant="outlined" color="secondary">
                          <Link to='/Contactus'>Contact Us</Link>
                        </Button>
                      </Stack>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div className="first_image">
                    <div className="childimage">
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
