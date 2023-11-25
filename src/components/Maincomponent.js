import React from 'react';
import img1 from '../images/mainimage.png';
export default function Maincomponent(){
    return(
        <>
        <section class="firstsection">
            <div class="leftsection">
                Hi! I'm <span class="purple">Rushikesh</span>
                <div>     
                     <span id="element"></span>
                </div>
                <span>
                    <a href="https://github.com/Rushikatkar" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/rushikesh-katkar-729094214/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt=""/></a>
                </span>
            </div>
            <div class="rightsection">
                <h2>
                    <img src={img1} alt=""/>
                </h2>
            </div>
        </section>
        </>
    )
}