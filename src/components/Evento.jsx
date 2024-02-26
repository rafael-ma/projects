function Evento() {
    function meuEvento() {
        console.log('Funfou bichão')
    }

    return (
        <>
        <button onClick={meuEvento} >Clique para disparar um evento</button>
        </>
    )
}

export default Evento