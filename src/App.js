import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import MiLogoStev from './img/MI-Logo.gif';
import {useState} from 'react';

function App() {

  //Aqui se van a colocar las funciones
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics+1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className="App">
      <div className='Mi-logo-contenedor'>
        <img 
          className='MiLogo'
          src= {MiLogoStev}
          alt='Logo Stev2ll'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
      <footer>
        <h3>creado por Stev2ll</h3>
      </footer>
    </div>
  );
}

export default App;
