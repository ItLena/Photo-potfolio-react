import React from "react";
import "./landing.css"
import { Link } from "react-router-dom";


export default function Landing(){
    return(
        <header>     
        <div className = "top-box">
           <div className = "title-text">
               <h1>Flowers photography</h1>
               <h4>Beautiful Natural Photography</h4>
               <Link to = "/cards"><button className= "btn-view">View Work</button></Link> 
           </div>
           <div className= "image-box">
            
            </div>
             </div>
             <section className="slice black">                 
                <h3>My work</h3>
             </section>            
        </header>
      
    )
}