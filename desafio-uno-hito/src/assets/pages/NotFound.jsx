import "../css/NotFound.css"
import { Link } from "react-router-dom"; 

const NotFound = () => {
    return (
        <div className="aviso"><h3> ⚠️Pagina no encontrada!</h3>

       <Link to="/" className="text-white me-3 text-decoration-none">
        Volver al Home
        </Link> 
        </div>
    
    )
}

export default NotFound