import cerrar from "../img/cerrar.svg"
const Modal = ({ setModal, animarModal, setAnimarModal }) => {

  const ocultarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 650);
  }
  return (

    <div className="modal">

      <div className="cerrar-modal">
        <img
          src={cerrar}
          alt="Cerrar Modal"
          onClick={ocultarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade El Nombre Del Gasto, Ej. Transporte"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade La Cantidad, Ej $300 "
            id="cantidad"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
          >
            <option value="">-- Seleccionar --</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorro</option>
            <option value="hogar">Hogar</option>
            <option value="ocio">Ocio</option>
            <option value="gastos">Gastos Varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div >

        <input 
          type="submit" 
          value="Añadir gasto"
        /> 

      </form>
    </div>
  )
}

export default Modal
