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
                                Beginner Guitar Method - Stage 1
                            </h1>
                            <h2>
                                30 Sessions | 16 days
                            </h2>
                            <p>
                                In our Stage 1 course we show you the ropes and help you form a solid foundation you can build on for years to come. Unlike many other beginner courses that have you learning music theory for weeks before you get to play real music, this course gets you playing recognizable riffs in the first week. If you want the best start in guitar, this is it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Indisyllabus() {
    return (
        <div className='indisyllabus'>
            <h1>
                A Comprehensive 10 Part Guitar System
            </h1>
            <div className="content">
                <Syllabuscard />
                <Syllabuscard />
            </div>



        </div>
    )
}

export default Indisyllabus