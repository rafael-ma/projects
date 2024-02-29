import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(event) {
        event.preventDefault()
        setUserEmail(email)        
    }

    function limparEmail() {
        setUserEmail('')
        setEmail('')
        document.querySelector('#inputEmail').value = ''
    }

    return <div>
        <h2>Cadastrar o seu e-mail</h2>
        <form>
            <input id="inputEmail" type="email" placeholder="Digite seu e-mail" onChange={(event) => setEmail(event.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            {/* Renderizaão condicional */}
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </form>
    </div>
}

export default Condicional