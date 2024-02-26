import { useState } from "react"

function Form() {
    function cadastrarUsuário(event) {
        event.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuário}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Digite seu nome"
                        onChange={(event) => setName(event.target.value)}
                        // Quando ocorrer uma mudança ele diparará um evento para mudar o valor guardo no state
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Digite sua senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form