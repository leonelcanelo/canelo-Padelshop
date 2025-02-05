import React from 'react'

const FetchCard = ({personaje}) => {
    
  return (
    <div className="card"style={{width:' 18rem', marginTop:15}}>
    <img src={personaje.img}className="card-img-top"alt={personaje.name}/>

<div className="card-body">
    <h5 className="card-title">{personaje.name}</h5>
    <p className="card-text"></p>

</div>
</div>
  )
}

export default FetchCard