import './LoginForm.css';

function LoginForm() {
  return (
    <form className="login-form">
      <h1 className="login-form__titulo">Iniciar sesión</h1>
      <p className="login-form__subtitulo">Ingresa con tu correo y contraseña</p>

      <div className="login-form__campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          className="login-form__input"
          placeholder="nombre@correo.com"
        />
      </div>

      <div className="login-form__campo">
        <label htmlFor="password">Contraseña</label>
        <div className="login-form__control">
          <input
            id="password"
            type="password"
            className="login-form__input"
            placeholder="Tu contraseña"
          />
          <button type="button" className="login-form__ojo" aria-label="Mostrar contraseña">
            🚫
          </button>
        </div>
      </div>

      <button type="button" className="login-form__boton">
        Ingresar
      </button>

      <p className="login-form__alterno">
        ¿Primera vez? <a href="#" className="login-form__enlace">Crear cuenta</a>
      </p>
    </form>
  );
}

export default LoginForm;