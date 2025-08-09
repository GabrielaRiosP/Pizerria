import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import '../css/Register.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetir, setRepetir] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const validarDatos = async (e) => {
    e.preventDefault();
    setError(""); // limpiar errores previos

    if (!email.trim() || !password.trim() || !repetir.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 dígitos");
      return;
    }

    if (password !== repetir) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email, password
        })
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        login?.({ token: data.token, email });
        setEmail(""); setPassword(""); setRepetir(""); 
        navigate("/");
      } else {
        setError(data.error || "Error en el registro");
      }
    } catch (error) {
      console.log("Error en register:", error);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <form onSubmit={validarDatos} className='Formulario'>
      <div className='form-group'>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label>Confirm password</label>
        <input
          type="password"
          value={repetir}
          onChange={(e) => setRepetir(e.target.value)}
          required
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className='btn btn-dark mt-3'>Enviar</button>
    </form>
  );
};

export default Register;