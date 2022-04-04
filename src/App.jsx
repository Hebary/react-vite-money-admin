
import { useState } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import { generarId } from "./utilities/utilities";
import ListadoGastos from "./components/ListadoGastos";

import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {



  const handleNuevoGasto = ()=>{
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 650);

  }

  const[gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const[isValidPresupuesto, setIsValidPresupuesto]  = useState(false);
  const [modal,setModal] = useState(false);
  const [animarModal,setAnimarModal] = useState(false);
  
  
  const guardarGasto = gasto=>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    // fecha en la que se realizó el gasto
    setGastos([...gastos,gasto]);

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
    }, 450);

  }

  return (
      <div className={modal ? "fijar":undefined}>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          gastos={gastos}
        />
      
        {isValidPresupuesto && 
        
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            />  
          </main>
          <div className="nuevo-gasto">
            <img src={iconoNuevoGasto} alt="Icono Nuevo Gasto" 
              onClick={handleNuevoGasto}
              />
          </div>

        </>
        }   

        {modal&&<Modal
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                />} 
      
      </div>
      );
      
}

export default App
