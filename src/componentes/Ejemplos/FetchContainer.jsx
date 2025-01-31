import React, { useEffect, useState } from 'react'


const FetchContainer = () => {
    const [personajes, setPersonajes] = useState ([])
    useEffect (()=>{
     // pedir los datos
     fetch ('https://rickandmortyapi.com/api/character')
     .then ((res)=>res.json()) // comvertimos o traducimos
     .then ((data)=> setPersonajes(data.results)) // guardar la respuesta
     .catch((error)=> console.log(error))
    },[])
     console.log(personajes,'personajs')
  return (
    <div>FetchContainer</div>
  )
}

export default FetchContainer
