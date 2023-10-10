import LoginForm from 'src/common/components/auth/LoginForm';
import AuthLayout from 'src/common/components/layout/AuthLayout';

function login() {
  return (
    <AuthLayout
      title="Account Login"
      linkText="Don't have an account"
      to="#"
      showInfo>
      <LoginForm />
    </AuthLayout>
  );
}

export default login;
