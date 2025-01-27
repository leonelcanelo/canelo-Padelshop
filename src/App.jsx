
import ItemListContainer from './componentes/ItemListContainer'
import NavBarcss from './componentes/Navbarcss'
import './App.css'

function App() {
  const biemvenido = 'biemvenidos a mi app 😘'
  return (
    <div>
     {/* Navbar con css */}
       <NavBarcss/>
       <ItemListContainer greeting='Biemvenidos a Padelshop'/>
       <p style={{color:'red', fontWeight:'bold'}}>{biemvenido}</p>
    </div>
  )
}

export default App
 