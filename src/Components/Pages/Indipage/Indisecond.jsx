import React from 'react'

function Indisecond(props) {
    return (
        <div className='indisecond'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="smalldes">
                            <h2>
                                Estimated time
                            </h2>
                            <h1>
                                {props.Estimated_time} 4 - 8 Weeks
                            </h1>
                            <p>
                                {props.speed}At 5 hours/week
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="smalldes">

                            <h2>
                                ENROLL BY
                            </h2>
                            <h1>
                                {props.enroll_by} March 16, 2022
                            </h1>
                            <p>
                                {props.enroll_des} Get access to the classroom immediately upon enrollment
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="smalldes">
                            <h2>
                                Taught By:
                            </h2>
                            <h1>
                                {props.tutor} Chris Eldridge
                            </h1>
                            <p>
                                {props.tutor_des} Professional guitarist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indisecond