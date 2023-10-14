import React, { Fragment } from 'react'
import {SiJavascript,SiMicrosoftsqlserver,SiNodedotjs,SiDotnet,SiReact,SiHtml5,SiCss3,SiBootstrap,SiCsharp,SiMongodb,SiExpress,SiPug, SiJava, SiPython, SiMysql} from 'react-icons/si'
function Skills() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">Technologies I know</h1>
                            <hr></hr>

                            <div className="row my-2 text-white">

                            <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiPython className='fs-4 text-white'/> Python</span>
                                </div>

                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiJavascript className='fs-4 text-white '/> JavaScript</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiNodedotjs className='fs-4 text-white'/> Node.js</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiMysql className='fs-4 text-white'/> sql</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiReact className='fs-4 text-white'/> React</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiHtml5 className='fs-4 text-white'/> Html</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiCss3 className='fs-4 text-white'/> Css</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiBootstrap className='fs-4 text-white'/> Bootstrap</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiJava className='fs-4 text-white'/> java</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiMongodb className='fs-4 text-white'/> MongoDB</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span><SiExpress className='fs-4 text-white'/> Express</span>
                                </div>
                            
                                
                            </div>

                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/Development-pana.png" alt="..."></img>
                    </div>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default Skills