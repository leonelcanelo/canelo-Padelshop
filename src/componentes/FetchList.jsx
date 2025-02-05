import React from 'react'
import FetchCard from './Ejemplos/FetchCard'


const FetchList = ({personajes}) => {
  return (
    <div className='d-flex justify-content-between align-item-center flex-wrap'>
      {personajes.map((personaje)=> <FetchCard key={personaje.id} personaje={personaje}/>)}
    </div>
  )
}

export default FetchList

