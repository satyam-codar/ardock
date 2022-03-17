import React, { Component } from 'react'
import Course_cards from './Course_cards';



export class Home_second extends Component {
  render() {
    return (
      <div>
        <div className="courses">
          <div className="back_image">
            <img src="images/boku.jpg" alt="sdfafa" />
          </div>
          <div className="container">
            <h1>
              OUR COURSES
            </h1>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-sm-3">
                <Course_cards coursename="Art & craft" hi1="Learning journeys built around exciting rythems" hi2="Certificate from Internation dance council" hi3="Develop articulation and self expression" totstu="4" views="5123" enrolled="32"/>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-3">
                <Course_cards coursename="Art & craft" hi1="Learning journeys built around exciting rythems" hi2="Certificate from Internation dance council" hi3="Develop articulation and self expression" totstu="4" views="5123" enrolled="32"/>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-3">
                <Course_cards coursename="Art & craft" hi1="Learning journeys built around exciting rythems" hi2="Certificate from Internation dance council" hi3="Develop articulation and self expression" totstu="4" views="5123" enrolled="32"/>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-3">
                <Course_cards coursename="Art & craft" hi1="Learning journeys built around exciting rythems" hi2="Certificate from Internation dance council" hi3="Develop articulation and self expression" totstu="4" views="5123" enrolled="32"/>
              </div>
            </div>
          </div>
        </div>




      </div>
    )
  }
}

export default Home_second;