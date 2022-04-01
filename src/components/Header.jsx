import AdminPresupuesto from "./AdminPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({presupuesto, setPresupuesto, isValidPresupuesto,setIsValidPresupuesto}) => {

    return (
        <header>
            <h1>Administrador de Gastos</h1>
            {
            isValidPresupuesto ? (
                <AdminPresupuesto
                    presupuesto={presupuesto}
                />
                ):(
                    <NuevoPresupuesto
                      presupuesto={presupuesto}
                      setPresupuesto={setPresupuesto}
                      setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )
            }
        </header>
    )   
}

export default Header
