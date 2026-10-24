import VisitanteLayout from '../../../layouts/VisitanteLayout/VisitanteLayout.jsx';
import LoginBienvenida from './components/LoginBienvenida.jsx';
import LoginForm from './components/LoginForm.jsx';
import './LoginPage.css';

function LoginPage() {
  return (
    <VisitanteLayout>
      <div className="login__tarjeta">
        <LoginBienvenida />
        <LoginForm />
      </div>
    </VisitanteLayout>
  );
}

export default LoginPage;