import { useState } from "react"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const validarDatos = (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim()) {
            alert("Todos los campos son obligatorios");
        } else if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 dígitos")
        }
        else {alert("Registro exitoso")} 
    }

    return (
        <>
        <form onSubmit={validarDatos} className='Formulario'>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" onChange={(e) => (setEmail(e.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" onChange={(e) => (setPassword(e.target.value))}/>
            </div>
        
            <button type="submit" className='btn btn-dark mt-3'>Enviar</button>
        </form>
        </>
    )
}

export default Login 