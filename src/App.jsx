
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

//Vite solo acepta comonentes con extencion .jsx, no acepta .js

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer text='BIENVENIDO AL ECOMMERS'/>
    <ItemCount />
    </>
  )
}

export default App
