import ItenCount from "./ItenCount"

const ItemListContainer = ({greetig}) => {
   // console.log (props)
   // const {greeting}= props

   const onAdd = (cantidad) => {
       alert(`Agregaste ${cantidad} al carrito`)
   }
       return(
         <div>
             <h1>{greetig}</h1>
             {/*este componente despues lo sacamos*/}
             {/*nav bar react bootstrap*/}
             <ItenCount stock={8} onAdd={onAdd}/>
         </div>
  )    
}
export default ItemListContainer
