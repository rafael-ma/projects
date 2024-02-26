function Form() {

    function cadastrarUsuário(event) {
        event.preventDefault()
        console.log('Cadastrou o usuário')
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuário}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
        <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form