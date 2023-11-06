import LoginForm from "src/components/auth/LoginForm";
import AuthLayout from "src/components/layout/AuthLayout";

function LoginPage() {
  return (
    <AuthLayout
      title="Account Login"
      linkText="Don't have an account"
      to="/signup"
      showInfo>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
