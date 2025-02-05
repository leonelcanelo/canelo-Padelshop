import React from "react"

const Item = ({prod})=>{
    
    return(
        <div className="card" style={{width:' 18rem', marginTop:15}}>
        <img src={prod.image} className="card-img-top" alt={prod.name}/>
    <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">${prod.price}</p>
        <a href="#" className="btn btn-primary">
            ver mas!
        </a>
    
    </div>
  </div>
    )
}

export default Item