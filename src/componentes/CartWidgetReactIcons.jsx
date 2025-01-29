import Badge from 'react-bootstrap/Badge';
import { BsCart4 } from "react-icons/bs";

const CartWidgetReactIcons = () => {
    return(
        
      <div>
       
         <BsCart4 color='white'fontSize={'2.0rem'}/>
         <Badge bg='secondary' fontSize={'2.0rem'} >5</Badge>
      </div>
    )
}

export default CartWidgetReactIcons
