function SeuNome({setName}) {
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="inputName">Digite seu nome </label>
            <input 
                id="inputName" 
                type="text" 
                placeholder="Nome aqui" 
                
            />
            <button onClick = {(event) => {
                setName(event.target.previousSibling.value)
            }}>Ok</button>
        </form>
    )
}

export default SeuNome