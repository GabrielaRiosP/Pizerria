import { useState } from 'react'
import '../css/Register.css'
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repetir, setRepetir] = useState("")

    const validarDatos = (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim() || !repetir.trim()) {
            alert("Todos los campos son obligatorios");
        } else if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 dígitos")
        }
        else if (password === repetir) {
            alert("Registro exitoso")
        }
        else ( alert("Las contraseñas no coinciden"))
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
            <div className='form-group'>
                <label>Confirm password</label>
                <input type="password" onChange={(e) => (setRepetir(e.target.value))}/>
            </div>
            <button type="submit" className='btn btn-dark mt-3'>Enviar</button>
        </form>
        </>
    )
}

export default Register