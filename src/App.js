
import './App.css';
import Navbar from './components/Navbar';
import Tabla from './components/Tabla'

function App() {
  const nombrePagina ="MoviesIUD";

  return (
    <div className="container">

      <Navbar titulo={nombrePagina}/>
      <Tabla />

    
    </div>
  );
}

export default App;
