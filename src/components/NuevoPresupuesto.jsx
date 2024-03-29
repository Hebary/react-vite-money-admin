import { useState } from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto   = ( 
  { presupuesto,
    setPresupuesto, 
    setIsValidPresupuesto} )=>{

    const[mensaje, setMensaje] = useState('');

    const handlePresupuesto = e =>{
        e.preventDefault();

        if ( !presupuesto || presupuesto<0 ){
            setMensaje('Presupuesto No Válido')
            return;
        }
        setMensaje('');
        setIsValidPresupuesto(true);
    }

return(

        <div className="contenedor-presupuesto contenedor sombra">
            <form
              onSubmit={handlePresupuesto}
              action="#" className="formulario">
                <div className="campo">
                    <label htmlFor="presupuesto">Agrega un Presupuesto</label>
                    <input 
                      className="nuevo-presupuesto"
                      type="number"
                      id="presupuesto"
                      placeholder="Añade tu Presupuesto"
                      value={presupuesto}
                      name="presupuesto"
                      onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                    <input
                      className="submit-presupuesto" 
                      type="submit"
                      value="Agregar"
                    />
                    {mensaje && <Mensaje 
                                tipo= "error">{mensaje}
                                </Mensaje>}    
                </div>
            </form>
        </div>

    );


}

export default NuevoPresupuesto;