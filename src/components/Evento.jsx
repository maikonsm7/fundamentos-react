// usando outra forma de criar um componente
// se colocar os parenteses no onClick, a funcao será chamada logo quando o componente for chamado
const Evento = () => {
    const imprimir = () => {
        console.log('evento acionado')
    }
    return(
        <div>
            <button onClick={imprimir}>Clique aqui</button>
        </div>
    )
}

export default Evento