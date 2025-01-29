import './App.css'
import EjemploProps from "./componentes/EjemploProps"
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import EjemploPropsChildren from './componentes/EjemploPropsChildren'
function App() {
  const biemvenido = 'biemvenidos a padelshops 😘'
  console.log('hola soy app')
  return (
    <div>
     {/* Navbar con css */}
       <Navbar/>
         <ItemListContainer greeting='Biemvenidos a Padelshop'/>
  
       {/*importo el componente*/}
         {/*<EjemploPropsChildren>
             hola!
         </EjemploPropsChildren>
         <EjemploPropsChildren>
             <img src="../img/Zapatillas k tour.jpeg" alt="" />
         </EjemploPropsChildren>
         <EjemploPropsChildren>
             <ItemListContainer greeting='Biemvenidos a Padelshop'/>  
         </EjemploPropsChildren>
         <EjemploPropsChildren/>*/}
    </div>
  )
}

export default App
