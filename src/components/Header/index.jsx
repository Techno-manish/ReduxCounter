import "./index.css"
import { NavLink } from "react-router-dom"

const Header = () =>(
    <nav className="navContainer">
        <NavLink to="/"><button>Home</button></NavLink>
        <NavLink to="/counter"><button>Counter</button></NavLink>
    </nav>
)
export default Header