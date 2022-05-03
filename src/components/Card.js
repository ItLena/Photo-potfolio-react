import React from "react";


export default function Card(props){
    const {card} = props
    return(
        <div className = "img-container">
           <img src={require(`../images/${card.image}`)} alt="" className="img-card"/>
           <section className="slice white">
           <h2>{card.title}</h2>
           <p>{card.discription}</p>
           </section>
        </div>
    )
}