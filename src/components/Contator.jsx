import { useState } from "react";

const Contador = () => {
    let [numero, setNumero] = useState(0)

    
    return(
        <div>
        <button onClick={() => setNumero(++numero)}>incrementar</button>
        <span>{numero}</span>
        </div>
    )
}

export default Contador