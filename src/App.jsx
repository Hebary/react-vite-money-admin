
import { useState } from "react"
import Header from "./components/Header"
import iconoNuevoGasto from "./img/nuevo-gasto.svg";
function App() {



const[isValidPresupuesto, setIsValidPresupuesto]  = useState(false);
const [presupuesto, setPresupuesto] = useState(0);

  return (
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      
        {isValidPresupuesto && <div className="nuevo-gasto">
          <img src={iconoNuevoGasto} alt="Icono Nuevo Gasto" />
        </div>
        }    
      
      </div>
      );
      
}

export default App
