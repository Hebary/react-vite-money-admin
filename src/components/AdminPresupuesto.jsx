import { useState, useEffect } from "react"
import {CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

const AdminPresupuesto = ( {presupuesto, gastos,setGastos,setPresupuesto,setIsValidPresupuesto} )=>{

    const [porcentaje,  setPorcentaje] = useState(0);
    const [disponible,setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);



    useEffect(()=>{
        const totalGastado = gastos.reduce( (total, gasto )=> gasto.cantidad + total,0);
        const totalDisponible = presupuesto - totalGastado;
        //calcular porcentaje 
        const porcentajeNuevo = ((presupuesto-totalDisponible) * 100 / presupuesto).toFixed(2);
        setGastado(totalGastado);
        setDisponible(totalDisponible);
        
       setTimeout(() => {
           setPorcentaje(porcentajeNuevo);
       }, 1000);

    },[gastos])

    const formatPresupuesto = (cantidad)=>{
        return cantidad.toLocaleString('en-US', 
        {
          style: 'currency',
          currency: 'USD'
        })
    }

    const handleResetApp = () =>{
        const res = confirm('Quieres reiniciar la App?');
        if(res){
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
            return;
        }

    }
    return(
    <div className=" animate contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
            <CircularProgressbar
                buildStyles={buildStyles({
                    pathColor: porcentaje > 100 ? "#DC2626" : "#3B826F",
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? "#DC2626" : "#3B826F",
                })}
                value={`${porcentaje}`}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className="contenido-presupuesto">
            <button
             className="reset-app"
             type="button"
             onClick={handleResetApp}>
                Resetar App
            </button>

            <p>
                <span>Presupuesto:</span>{' '}{formatPresupuesto(presupuesto)}
            </p>
            <p className={`${disponible <0 ? 'negativo' : '' }`}>
                <span>Disponible:</span>{' '}{formatPresupuesto(disponible)}
            </p>
            <p>
                <span>Gastado:</span>{' '}{formatPresupuesto(gastado)}
            </p>
        </div>
    </div>
    )
}

export default AdminPresupuesto;