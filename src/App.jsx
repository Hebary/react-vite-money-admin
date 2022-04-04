
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import { generarId } from "./utilities/utilities";
import ListadoGastos from "./components/ListadoGastos";

import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {


  const [editarGasto,setEditarGasto] = useState({});
  const[gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const[isValidPresupuesto, setIsValidPresupuesto]  = useState(false);
  const [modal,setModal] = useState(false);
  const [animarModal,setAnimarModal] = useState(false);
  
  
    useEffect(()=>{
        if( Object.keys(editarGasto).length > 0){
          setModal(true);
          setTimeout(() => {
            setAnimarModal(true);
          }, 650);
        }
    },[ editarGasto ])
  
  
  
  const handleNuevoGasto = ()=>{
      setModal(true);
      setEditarGasto({});
      setTimeout(() => {
        setAnimarModal(true);
      }, 650);
  
  }
  
  const guardarGasto = gasto=>{
    if(gasto.id){
      //Actualizar
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastoActualizado);
      setEditarGasto({});
    }else{
      //Agregar
      gasto.id = generarId();
      gasto.fecha = Date.now();
      // fecha en la que se realizó el gasto
      setGastos([...gastos,gasto]);
  
    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
    }, 450);

  }

  const eliminarGasto = id =>{
    const gastosFiltrados = gastos.filter(gasto => gasto.id !== id);
      setGastos(gastosFiltrados);
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
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
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
                  editarGasto={editarGasto}
                  setEditarGasto={setEditarGasto}
                />} 
      
      </div>
      );
      
}

export default App
