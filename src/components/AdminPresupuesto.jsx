import { useState, useEffect } from "react"

const AdminPresupuesto = ( {presupuesto, gastos} )=>{

    const [disponible,setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);



    useEffect(()=>{
        const totalGastado = gastos.reduce( (total, gasto )=> gasto.cantidad + total,0);
        setGastado(totalGastado);
        const totalDisponible = presupuesto - totalGastado;
        setDisponible(totalDisponible);
    },[gastos])

    const formatPresupuesto = (cantidad)=>{
        return cantidad.toLocaleString('en-US', 
        {
          style: 'currency',
          currency: 'USD'
        })
    }


    return(
    <div className=" animate contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
           <p>grafica</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span>{' '}{formatPresupuesto(presupuesto)}
            </p>
            <p>
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