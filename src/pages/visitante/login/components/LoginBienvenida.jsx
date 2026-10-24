import './LoginBienvenida.css';

function LoginBienvenida() {
  return (
    <aside className="login-bienvenida">
      <h2 className="login-bienvenida__titulo">Que bueno verte de nuevo!</h2>
      <p className="login-bienvenida__texto">
        Entra para ver las estaciones, tu plan y tus viajes. Si eres administrador,
        llegarás a tu panel de control.
      </p>
    </aside>
  );
}

export default LoginBienvenida;