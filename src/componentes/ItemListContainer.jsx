import ItenCount from "./ItenCount"
import { getProducts } from "../mock/data"
import { useEffect, useState } from "react"

const ItemListContainer = ({greetig}) => {
    const [productsList, setProductsList] = useState([])
   // console.log (props)
   // const {greeting}= props

   const onAdd = (cantidad) => {
       alert(`Agregaste ${cantidad} al carrito`)
   }
   //ejemplo de promise
   /*const error = false
   const ejemploPromise = new Promise ((resolve, reject)=>{
         if (error) {
            reject('No hay lazana')
         }else{
            resolve('si hay lazana')
         }

   }) */
      // console.log(ejemploPromise)
      useEffect(()=>{
      //////llamamos a la promesa
        getProducts()
      //////tratamos y la guardamos en un estado
        .then((res)=> setProductsList(res))
      //////atrapamos el error
        .catch((error)=>console.log(error,'error'))
      },[])
    
      console.log(productsList,'data')
       return(
         <div>
             <h1>{greetig}</h1>
             {productsList.map((product)=> <p key={product.id}>{product.name}</p> )}
             {/*este componente despues lo sacamos*/}
             {/*nav bar react bootstrap*/}
             <ItenCount stock={10} onAdd={onAdd}/>
         </div>
  )    
}
export default ItemListContainer
