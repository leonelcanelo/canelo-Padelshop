import React from 'react'
import ItenCount from './ItenCount'

const ItemDetail = ({item}) => {
     const onAdd = (cantidad) => {
      alert (`Agregaste ${cantidad} al carrito`)
     }
  return (
    <div>
      <h1>Detalle de : {item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>{item.description}</p>
      <p>stock disponible:{item.stock}</p>
      <p>precio: ${item.price}</p>
      <ItenCount stock={item.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail
