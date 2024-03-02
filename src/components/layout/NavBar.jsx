import { Link } from "react-router-dom"
import style from './NavBar.module.css'

function NavBar() {
    return(
        <ul id={style.list}>
            <li className="itemList"><Link to="/">Home</Link></li>
            <li className="itemList"><Link to='/empresa'>Empresa</Link></li>
            <li className="itemList"><Link to='/contato'>Contato</Link></li>
        </ul>
    )
}

export default NavBar