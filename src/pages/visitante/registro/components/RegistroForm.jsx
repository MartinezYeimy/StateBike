import './RegistroForm.css';

function RegistroForm() {
  return (
    <form className="registro-form">
      <h1 className="registro-form__titulo">Crea tu cuenta</h1>
      <p className="registro-form__subtitulo">Debes ser mayor de edad para registrarte</p>

      <div className="registro-form__campo">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          className="registro-form__input"
          placeholder="Escribe tu nombre completo"
        />
      </div>

      <div className="registro-form__campo">
        <label htmlFor="nacimiento">Fecha de nacimiento</label>
        <input id="nacimiento" type="date" className="registro-form__input" />
      </div>

      <div className="registro-form__campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          className="registro-form__input"
          placeholder="nombre@correo.com"
        />
      </div>

      <div className="registro-form__campo">
        <label htmlFor="password">Contraseña</label>
        <div className="registro-form__control">
          <input
            id="password"
            type="password"
            className="registro-form__input"
            placeholder="Crea una contraseña"
          />
          <button type="button" className="registro-form__ojo" aria-label="Mostrar contraseña">
            🚫
          </button>
        </div>
      </div>

      <div className="registro-form__campo">
        <label htmlFor="confirmar">Confirmar contraseña</label>
        <div className="registro-form__control">
          <input
            id="confirmar"
            type="password"
            className="registro-form__input"
            placeholder="Repite tu contraseña"
          />
          <button type="button" className="registro-form__ojo" aria-label="Mostrar contraseña">
            🚫
          </button>
        </div>
      </div>

      <label className="registro-form__terminos">
        <input type="checkbox" />
        Acepto los términos y condiciones y el tratamiento de mis datos personales
      </label>

      <button type="button" className="registro-form__boton">
        Crear cuenta
      </button>

      <p className="registro-form__alterno">
        ¿Ya tienes cuenta? <a href="#" className="registro-form__enlace">Iniciar sesión</a>
      </p>
    </form>
  );
}

export default RegistroForm;