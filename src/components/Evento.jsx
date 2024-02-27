import Button from "./events/Button"

function Evento() {
    function meuEvento() {
        console.log('Funfou bichão')
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento')
    }

    return (
        <>
        <Button onClick={meuEvento} text='Primeiro Evento'/>
        <Button onClick={segundoEvento} text='Segundo Evento'/>
        </>
    )
}

export default Evento