import './App.css'
import EjemploProps from "./componentes/EjemploProps"
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  const biemvenido = 'biemvenidos a mi app 😘'
  console.log('hola soy app')
  return (
    <div>
     {/* Navbar con css */}
       <Navbar/>
       <ItemListContainer greeting='Biemvenidos a Padelshop'/>
       <p style={{color:'red', fontWeight:'bold'}}>{biemvenido}</p>
       {/*importo el componente*/}
      <EjemploProps biemvenido={biemvenido}/>
    </div>
  )
}

export default App
 