
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Modal from "./components/Modal"
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";
import { generarId } from "./utilities/utilities";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto') ?? 0)
  );
    const[isValidPresupuesto, setIsValidPresupuesto]  = useState(false);
    const [modal,setModal] = useState(false);
    const [animarModal,setAnimarModal] = useState(false);
    
  const[gastos, setGastos] = useState(
      localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
      const [editarGasto,setEditarGasto] = useState({});
      const [filtro, setFiltro]  = useState('');
  
  
    useEffect(()=>{
        if( Object.keys(editarGasto).length > 0){
          setModal(true);
          setTimeout(() => {
            setAnimarModal(true);
          }, 650);
        }
    },[ editarGasto ])
  
    useEffect(()=>{
      Number(localStorage.setItem('presupuesto',presupuesto) ?? 0);
    },[presupuesto])

    useEffect(()=>{ 
      const presupLS = Number(localStorage.getItem('presupuesto') ?? 0);
      if(presupLS > 0){
        setIsValidPresupuesto(true)
      }
    },[]);
  
    useEffect(()=>{
      localStorage.setItem('gastos',JSON.stringify(gastos) ?? []);
    },[gastos])

    useEffect(() => {
      if(filtro){
        const filtrado = gastos.filter(gasto => gasto.categoria === filtro);
      }
    },[filtro])

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
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
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
