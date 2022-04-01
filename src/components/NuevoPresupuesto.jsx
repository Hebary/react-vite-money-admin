
const NuevoPresupuesto   = ( {presupuesto,setPresupuesto} )=>{

return(

        <div className="contenedor-presupuesto contenedor sombra">
            <form action="·" className="formulario">
                <div className="campo">
                    <label htmlFor="presupuesto">Definir Presupuesto</label>
                    <input 
                        className="nuevo-presupuesto"
                        type="text"
                        id="presupuesto"
                        placeholder="Añade tu Presupuesto"
                        name="presupuesto"
                        />
                    <input 
                        type="submit"
                        value="Añadir"
                    />    
                </div>
            </form>
        </div>

    );


}

export default NuevoPresupuesto;