import { useState } from "react";

const Lista = () => {
    const [lista] = useState(['Matheus', 'Ana', 'Bia'])
    return(
        <div>
            <ul>
                {lista.map( (item, indice) => (
                    <li key={indice}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lista