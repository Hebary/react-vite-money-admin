import Gasto from './Gasto'

const ListadoGastos = ({
    gastos,
    setEditarGasto, 
    eliminarGasto,
    filtro,
    gastosFiltrados
  }) => {
    
  return (
      <div className="contenedor listado-gastos">
      
      { filtro ? ( 
        <>
        <h2 >{gastosFiltrados.length ? 'Gastos': 'No Hay Gastos En Esta Categoría'}</h2>
          
          {gastosFiltrados.map( gasto => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setEditarGasto={setEditarGasto}
                eliminarGasto={eliminarGasto}
              />
            ))
          }
          </> 
        ) : (
          <>
            <h2 >{gastos.length ? 'Gastos': 'No Hay Gastos Aún'}</h2>
              {gastos.map(gasto => (
                  <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setEditarGasto={setEditarGasto}
                    eliminarGasto={eliminarGasto}
                  />
                ))
              }
          </>
        )
      }
      
      </div>
  )
}

export default ListadoGastos
