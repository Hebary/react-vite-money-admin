import Gasto from './Gasto'

const ListadoGastos = ({gastos, setEditarGasto, eliminarGasto}) => {
    
  return (
      <div className="contenedor listado-gastos">
        <h2 >{gastos.length ? 'Gastos': 'No Hay Gastos Agrega Uno'}</h2>
       
        {
          gastos.map(gasto => (
            
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            />

          ))
        }
      
      </div>
  )
}

export default ListadoGastos
