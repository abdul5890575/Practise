import React from 'react'

export default function HeroList(props) {
    let allheros = props.herodata.map((hero) =>
    <div>    
        <li>ID= {hero.id}</li>    
        <li>Name={hero.name}</li>
        <li>Strength={hero.powerstats.strength}</li>
        <img src={hero.image.url}/>
        <br/>
        <br/>
    </div> 
    )
    
    return (
      <div>
      <ul>{props.herodata && allheros} </ul>
      </div>
    )
}