import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(){
   return( 
   <>
   <header>
        <nav>
            <div class="left">
                <h2>Rushikesh Portfolio</h2>
            </div>
            <div class="right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#abt">About</a></li>
                    <li><a  href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
   )
}