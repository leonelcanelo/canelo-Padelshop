import React from 'react'
import Item from './Ejemplos/Item'

const ItemList = ({productsList}) => {
  return (
    <div className='d-flex justify-content-between align-items-canter flex-wrap'>
        {productsList. map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
