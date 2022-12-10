import AdminPresupuesto from "./AdminPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto,
    setIsValidPresupuesto,
    gastos,
    setGastos}) => {

    return (
        <header>
            <h1>Administrador de Dinero</h1>
            {
            isValidPresupuesto ? (
                <AdminPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
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
