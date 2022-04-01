
import { useState } from "react"
import Header from "./components/Header"
import iconoNuevoGasto from "./img/nuevo-gasto.svg";
function App() {



  const handleNuevoGasto = ()=>{
    setModal(true);
  }


  const [presupuesto, setPresupuesto] = useState(0);
  const[isValidPresupuesto, setIsValidPresupuesto]  = useState(false);
  const [modal,setModal] = useState(false);
  
  
  
  
  return (
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      
        {isValidPresupuesto && <div className="nuevo-gasto">
          <img src={iconoNuevoGasto} alt="Icono Nuevo Gasto" 
            onClick={handleNuevoGasto}
          />
          
        </div>
        }   

        {modal&&<p>Desde Modal</p>} 
      
      </div>
      );
      
}

export default App
