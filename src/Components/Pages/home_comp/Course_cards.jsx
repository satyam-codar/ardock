import React from 'react'
import "./Coursecard.css"


function Course_cards(props) {
    return (
        <div>
            <div class="card">
                <div class="card-image"></div>
                <div class="card-text">
                    <span class="date">4 days ago</span>
                    <h2>{ props.coursename}</h2>
                    <ul>
                        <li>
                            {props.hi1} 
                        </li>
                        <li>
                            {props.hi2}
                            </li>
                        <li>
                            {props.hi3}
                            </li>
                    </ul>
                    {/* <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p> */}
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="value">{props.totstu}<sup>m</sup></div>
                        <div class="type">read</div>
                    </div>
                    <div class="stat border">
                        <div class="value">{props.views}</div>
                        <div class="type">views</div>
                    </div>
                    <div class="stat">
                        <div class="value">{props.enrolled}</div>
                        <div class="type">comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course_cards;