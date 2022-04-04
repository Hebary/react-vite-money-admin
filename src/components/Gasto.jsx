import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
 } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css"; 
import { formatearFecha } from "../utilities/utilities";

import iconoAhorro from "../img/icono_ahorro.svg"
import iconoCasa from "../img/icono_casa.svg"
import iconoComida from "../img/icono_comida.svg"
import iconoGastos from "../img/icono_gastos.svg"
import iconoOcio from "../img/icono_ocio.svg"
import iconoSalud from "../img/icono_salud.svg"
import iconoSuscrip from "../img/icono_suscripciones.svg"

const Gasto = ({gasto, setEditarGasto, eliminarGasto})=>{

const{ categoria, nombreGasto ,cantidad, id, fecha } = gasto;

    const diccionarioDeIconos= {
        comida: iconoComida,
        ocio: iconoOcio,
        ahorro: iconoAhorro,
        hogar: iconoCasa,
        gastos: iconoGastos,
        salud: iconoSalud,
        suscripciones: iconoSuscrip
    }

    const leadingActions = ()=>(
        <LeadingActions>
            <SwipeAction 
              onClick={ ()=>setEditarGasto(gasto) }
            >
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    

    const trailingActions = ()=>(
        <TrailingActions>
            <SwipeAction 
              onClick={()=>eliminarGasto(id)}
              destructive={true}    
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    


    return(
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={diccionarioDeIconos[categoria]}
                            alt={`imagen-${categoria}`}
                            />
                        <div className="descripcion-gasto">
                            <p className="categoria">{ categoria }</p>
                            <p className="nombre-gasto">{ nombreGasto }</p>
                            <p className="fecha-gasto">
                                Agregado el:{' '}
                                <span>{formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>
                        <p className ="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>

    );
}

export default Gasto