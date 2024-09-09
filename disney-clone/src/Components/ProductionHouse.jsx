import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'

import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGV from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarV from '../assets/Videos/star-wars.mp4'


function ProductionHouse() {

    const productionHouse = [
        {
            name: "Disney",
            logo: disney,
            video: disneyV
        },
        {
            name: "Marvel",
            logo: marvel,
            video: marvelV
        },
        {
            name: "National Geographic",
            logo: nationalG,
            video: nationalGV
        },
        {
            name: "Pixar",
            logo: pixar,
            video: pixarV
        },
        {
            name: "Star Wars",
            logo: starwar,
            video: starwarV
        }
    ]

  return (
    <div>
      <h1>Production House</h1>
    </div>
  )
}

export default ProductionHouse
