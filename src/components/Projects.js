import React from 'react';
import img2 from '../images/sapa.png'
import img3 from '../images/ecom.png'

export default function Projects(){
    return(
        <>
        <section id="projects" >
            <div class="heading-sec2">
                <div id="element">PROJECTS</div>
                <span>Each Project Is An Exclusive Development Endeavor</span>
            </div>
            <div class="cards">
                <div class="cards1">
                    <div class="cardbody">
                        <div>
                            <img src={img3} alt=""/>
                            <div class="incont">
                                <h3>RKSHOP E-COMMERCE APP</h3>
                                <hr/>
                                <h4>The Bummer E-Commerce App Offers A Cart System, A Sleek Interface, And A Secure Payment Gateway For A Seamless Shopping Experience.    
                                </h4>
                                <br/> 
                                <h3>Languages And Tools Used:- </h3>
                                <h4>React</h4>
                                <h4>Bootstrap</h4>
                                <a href="https://rkshop.netlify.app/">
                                <button class="card-button">
                                    View
                                </button></a>
                        </div>
                        </div>
                    </div>
                </div>    
                <div class="cards1">
                    <div class="cardbody">
                        <div>
                            <img src={img2} alt=""/>
                            <div class="incont">
                                <h3>SELF ANALYSIS AND PLACEMENT</h3>
                                <hr/>
                                    <h4>SAP Is Platform For Students To Analyse Their Criterias And Skills According The Company
                                        For They Are Prepare.
                                    </h4>
                                    <br/> 
                                    <h3>Languages And Tools Used:- </h3>
                                    <h4>React</h4>
                                    <h4>Node.js</h4>
                                    <h4>SQL Workbench</h4>
                                <a href="#"><button class="card-button">
                                    Code
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </section>
        
        </>
    )
}