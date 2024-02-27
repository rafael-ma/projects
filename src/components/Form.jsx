import { useState } from "react"
import styles from './Form.module.css'

function Form() {
    function cadastrarUsuário(event) {
        event.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <form id={styles.form} onSubmit={cadastrarUsuário}>
            <h1 id={styles.header}>Cadastro</h1>
            <div className={styles.input}>
                <label className={styles.label} htmlFor="name">Nome: </label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Digite seu nome"
                    onChange={(event) => setName(event.target.value)}
                    // Quando ocorrer uma mudança ele diparará um evento para mudar o valor guardo no state
                />
            </div>
            <div className={styles.input}>
                <label className={styles.label} htmlFor="password">Senha: </label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Digite sua senha"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div id={styles.button}>
                <input type="submit" value='Cadastrar' />
            </div>
            </form>
    )
}

export default Form