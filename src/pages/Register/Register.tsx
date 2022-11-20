import { Link, useNavigate } from "react-router-dom"
import { InputGroup, LoginContainer, LoginContent } from "../Login/Login.styled"

export const Register = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/tablas/productos');
  }

  return (
    <LoginContainer>
      <LoginContent>
        <picture className="logo">
          <img src="/src/assets/logo.svg" alt="logo cusco" />
        </picture>
        <h1>Create una cuenta!</h1>
        <p>Bienvenido(a)!. Por favor, ingresa tus credenciales para proceder a la creación de la cuenta</p>
        <InputGroup>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" placeholder="Escribe tu nombre ..."/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" name="lastname" id="lastname" placeholder="Escribe tu apellido ..."/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Escribe tu email ..."/>
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Escribe tu contraseña ..."/>
        </InputGroup>
        <button onClick={ handleLogin }>Registrar cuenta</button>
        <div>
          <span>¿Ya tienes una cuenta? <Link to="/login">Inicie sesión aquí</Link></span>
        </div>
        <span className="copyright">Copyright &copy; 2022 AGRO INVERSIONES "CUSCO"  E.I.R.L.</span>
      </LoginContent>
      <picture className="cover">
        <img src="/src/assets/machupichu.jpg" alt="machupichu" />
      </picture>
    </LoginContainer>
  )
}
