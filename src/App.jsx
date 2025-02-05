import './App.css'
import FetchContainer from './componentes/Ejemplos/FetchContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer'
import NavBarPadelBootstrap from './componentes/NavBarPadelBootstrap'

function App() {
  /*const biemvenido = 'biemvenidos a padelshops 😘'*/
  return (
    <div>
      
      <NavBarPadelBootstrap/>
      <ItemListContainer greeting='Biemvenidos a Padelshop'/>
      {/*<FetchContainer/>*/}
      <ItemDetailContainer/>
    </div>
  )
}

export default App


/*rafc*/