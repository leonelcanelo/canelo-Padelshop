
import { getProducts } from "../mock/data"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"


const ItemListContainer = ({greetig}) => {
    const [productsList, setProductsList] = useState([])
    useEffect(()=>{
         getProducts()
        .then((res)=> setProductsList(res))
        .catch((error)=> console.log(error))
    },[])

      //useEffect(()=>{
    
        //getProducts()
    
       // .then((res)=> setProductsList(res))
     
        //.catch((error)=>console.log(error,'error'))
     // },[])
    
      //console.log(productsList,'data')
       return(
         <div>
             <h1>{greetig}</h1>            
             <ItemList productsList={productsList}/>
         </div>
  )    
}
export default ItemListContainer

/*<ItenList productsList={productsList}/>*/

/*const ItemListContainer = ({greetig}) => {
    const [productsList, setProductsList] = useState([])
    useEffect(()=>{
         getProducts()
        .then((res)=> setProductsList(res))
        .catch((error)=> console.log(error))
    },[])
      const onAdd = (cantidad) => {
       alert(`Agregaste ${cantidad} al carrito`)
   } */

        /*productsList.map((product)=> <p key={product.id}>{product.name}</p> )*/
             /*este componente despues lo sacamos*/
             /*nav bar react bootstrap*/