import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom text-white'>Ambitious full-stack developer <br></br>
                                
                            </p>
                            <p className='slide-in-bottom text-white'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom text-white'>
                                The technology I've worked on : <span className="text-red ls-2">Machine learning,deep learning<br></br>
                                Java, Sql, Html, Css, Js, Bootstrap </span>
                            </p>
                            <p className='slide-in-bottom text-white'>
                                Currently Learning React Js Library
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/aboutme.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About