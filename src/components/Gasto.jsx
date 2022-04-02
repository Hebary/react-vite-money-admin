import { formatearFecha } from "../utilities/utilities";
import iconoAhorro from "../img/icono_ahorro.svg"
import iconoCasa from "../img/icono_casa.svg"
import iconoComida from "../img/icono_comida.svg"
import iconoGastos from "../img/icono_gastos.svg"
import iconoOcio from "../img/icono_ocio.svg"
import iconoSalud from "../img/icono_salud.svg"
import iconoSuscrip from "../img/icono_suscripciones.svg"

const Gasto = ({gasto})=>{

const{categoria,nombreGasto,cantidad,id, fecha} = gasto;

    const diccionarioDeIconos= {
        comida: iconoComida,
        ocio: iconoOcio,
        ahorro: iconoAhorro,
        hogar: iconoCasa,
        gastos: iconoGastos,
        salud: iconoSalud,
        suscripciones: iconoSuscrip
    }


    return(
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

    );
}

export default Gasto