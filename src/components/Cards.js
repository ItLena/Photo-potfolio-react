import React from "react";
import Card from "./Card";
import data from "../data"

export default function Cards(){
  return( data.map(card=>{
        return( <Card 
          key={card.id}
          card={card}/>
          )
      })
  )}