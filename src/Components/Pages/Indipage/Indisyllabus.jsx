import React from 'react'

function Syllabuscard(props) {
    return (
        <div className="container">
            <div className="syllcard">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-12">
                        <div className="syllcardimg">
                            <img src="/Images/guitar1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-9 col-sm-12">
                        <div className="syllcardtext">
                            <h1>
                                {props.heading}
                            </h1>
                            <h2>
                                {props.number} Sessions | {props.time} days
                            </h2>
                            <p>
                                {props.first_des} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Indisyllabus(props) {
    return (
        <div className='indisyllabus'>
            <h1>
                A Comprehensive {props.breakdown} 10 Part Guitar System
            </h1>
            <div className="content">

                {props.program_breakdown.map((pile)=>(
                    <>
                    <Syllabuscard key={pile.sessions} heading={pile.first_head} time={pile.time_period} number={pile.sessions} first_des={pile.first_des}/>
                    </>
                ))}
                
            </div>
        </div>
    )
}

export default Indisyllabus