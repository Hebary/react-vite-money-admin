const AdminPresupuesto = ({presupuesto})=>{

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
                <span>Disponible:</span>{' '}{formatPresupuesto(0)}
            </p>
            <p>
                <span>Gastado:</span>{' '}{formatPresupuesto(0)}
            </p>
        </div>
    </div>
    )
}

export default AdminPresupuesto;