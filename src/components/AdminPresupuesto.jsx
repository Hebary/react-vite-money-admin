const AdminPresupuesto = ({presupuesto})=>{
    return(
    <div className=" animate contenedor contenedor-presupuesto sombra dos-columnas">
        <div>
           <p>grafica</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span>${' '}{presupuesto}
            </p>
        </div>
    </div>
    )
}

export default AdminPresupuesto;