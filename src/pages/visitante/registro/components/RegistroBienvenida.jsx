import './RegistroBienvenida.css';

function RegistroBienvenida() {
  return (
    <aside className="registro-bienvenida">
      <h2 className="registro-bienvenida__titulo">Muévete por Tunja en bicicleta.</h2>
      <p className="registro-bienvenida__texto">
        Crea tu cuenta, compra un plan y desbloquea una bicicleta con tu tarjeta NFC
      </p>

      <ol className="registro-bienvenida__pasos">
        <li className="registro-bienvenida__paso">
          <span className="registro-bienvenida__numero">1.</span>
          Crea tu cuenta
        </li>
        <li className="registro-bienvenida__paso">
          <span className="registro-bienvenida__numero">2.</span>
          Un administrador vincula tu tarjeta NFC
        </li>
        <li className="registro-bienvenida__paso">
          <span className="registro-bienvenida__numero">3.</span>
          Compra un plan y empieza a pedalear
        </li>
      </ol>
    </aside>
  );
}

export default RegistroBienvenida;