import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBarcss from './componentes/Navbarcss'

function App() {
  return (
    <div>
     {/* Navbar con css */}
       <NavBarcss/>
       <ItemListContainer greeting='Biemvenidos a Padelshop'/>
    </div>
  )
}

export default App
 