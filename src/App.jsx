
import { useState } from "react"
import Header from "./components/Header"

function App() {

const[isValidPresupuesto, setIsValidPresupuesto]  = useState(false);
const [presupuesto, setPresupuesto] = useState(0);

  return (
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>
    )
}

export default App
