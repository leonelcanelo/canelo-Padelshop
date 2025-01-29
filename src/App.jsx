import './App.css'
/*import EjemploProps from "./componentes/EjemploProps"*/
/*import Navbar from './componentes/Navbar'*/
import ItemListContainer from './componentes/ItemListContainer'
/*import EjemploPropsChildren from './componentes/EjemploPropsChildren'*/
import NavBarPadelBootstrap from './componentes/NavBarPadelBootstrap'

function App() {
  /*const biemvenido = 'biemvenidos a padelshops 😘'*/
  return (
    <div>
      
      <NavBarPadelBootstrap/>
      <ItemListContainer greeting='Biemvenidos a Padelshop'/>

     {/* Navbar con css */}
       {/*<Navbar/>*/}
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
