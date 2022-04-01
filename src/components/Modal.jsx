import cerrar from "../img/cerrar.svg"
const Modal = ({setModal,animarModal,setAnimarModal}) => {

const ocultarModal = ()=>{
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
                <form className={`formulario ${animarModal? "animar":"cerrar"}`}>
                    <legend>Nuevo Gasto</legend>
                </form>

        </div>
    )
}

export default Modal
