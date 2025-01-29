import React from 'react'
import { useState } from "react";

const ItenCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => {

        setCount(count +1) 
    }
    const subtract = () => {
        setCount(count -1) 
    }
    console.log('valor de count : ', count)
    console.log('soy itenmcount y me monte')
  return (
    <div>
        <div>
           {/*<img src="../img/Zapatillas k tour.jpeg" alt=""/>*/}
            <button className='btn btn-danger' onClick={subtract} disabled={count === 0}>-</button>
            <span className='btn'>{count}</span>
            <button className='btn btn-success'onClick={add} disabled={count === stock} >+</button>
        </div>
           <button className='btn btn-primary' disabled={stock === 0 || count === 0 } onClick={()=>onAdd(count)} >Agregar al carrito</button>
    </div>

  )
}

export default ItenCount
