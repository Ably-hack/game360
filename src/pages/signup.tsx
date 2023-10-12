import SignupForm from 'src/common/components/auth/SignupForm';
import AuthLayout from 'src/common/components/layout/AuthLayout';

function signup() {
  return (
    <AuthLayout
      title="Create an Account"
      linkText="Already have an account?"
      to="#"
      showInfo>
      <SignupForm />
    </AuthLayout>
  );
}

export default signup;
