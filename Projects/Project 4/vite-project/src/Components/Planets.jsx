import React from 'react'
const Planets = () =>{
  const arrOfPlanets = [
        {name: 'Mars', isGasPlanet: false},
        {name: 'Jupiter', isGasPlanet: true},
        {name: 'Saturn', isGasPlanet: true},
        {name: 'Earth', isGasPlanet: false},
        {name: 'Venus', isGasPlanet: false},
        {name: 'Uranus', isGasPlanet: true},
        {name: 'Neptune', isGasPlanet: true},
        {name: 'Mercury', isGasPlanet: false},
        {name: 'Pluto', isGasPlanet: false}
  ];
  return (
      <React.Fragment>
            {arrOfPlanets.map((planetName, key)=>{
                  return(
                      !planetName.isGasPlanet && <h1>{planetName.name}</h1>
                  )
            })}
      </React.Fragment>
  )
}
export default Planets