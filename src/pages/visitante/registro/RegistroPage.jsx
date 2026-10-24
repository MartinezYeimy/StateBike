import VisitanteLayout from '../../../layouts/VisitanteLayout/VisitanteLayout.jsx';
import RegistroBienvenida from './components/RegistroBienvenida.jsx';
import RegistroForm from './components/RegistroForm.jsx';
import './RegistroPage.css';

function RegistroPage() {
  return (
    <VisitanteLayout>
      <div className="registro__tarjeta">
        <RegistroBienvenida />
        <RegistroForm />
      </div>
    </VisitanteLayout>
  );
}

export default RegistroPage;