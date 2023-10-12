import SignupForm from 'src/common/components/auth/SignupForm';
import AuthLayout from 'src/common/components/layout/AuthLayout';

function SignupPage() {
  return (
    <AuthLayout
      title="Create an Account"
      linkText="Already have an account?"
      to="/login"
      showInfo>
      <SignupForm />
    </AuthLayout>
  );
}

export default SignupPage;
