import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthProvider";
import { useFetch } from "../../hook";
import { EventListener } from "../../models";
import { authUser } from "../../services/auth";
import { InputGroup, LoginContainer, LoginContent } from "./Login.styled"

export const Login = () => {

  const navigate = useNavigate();

  const { callEndPoint } = useFetch();
  const { handleLogin: login } = useAuthContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: EventListener) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleLogin = async () => {
    const response = await callEndPoint(authUser(form));
    if (response.status === 201) {
      const isAuth = login(response.data);
      if (isAuth) navigate('/tablas/productos')
    }
  }

  return (
    <LoginContainer>
      <LoginContent>
        <picture className="logo">
          <img src="/src/assets/logo.svg" alt="logo cusco" />
        </picture>
        <h1>Logueate!</h1>
        <p>Bienvenido(a)!. Por favor, ingresa tus credenciales para acceder al sistema </p>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Escribe tu email ..." onChange={ handleChange }/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Escribe tu contraseña ..." onChange={ handleChange }/>
        </InputGroup>
        <button onClick={ handleLogin }>Iniciar sesión</button>
        <div>
          <span>¿No tienes una cuenta? <Link to="/register">Registrese aquí</Link></span>
          <span>¿Se te olvido la contraseña? <Link to="/recovery-password">Recuperela aquí</Link></span>
        </div>
        <span className="copyright">Copyright &copy; 2022 AGRO INVERSIONES "CUSCO"  E.I.R.L.</span>
      </LoginContent>
      <picture className="cover">
        <img src="/src/assets/machupichu.jpg" alt="machupichu" />
      </picture>
    </LoginContainer>
  )
}
