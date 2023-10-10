import LoginForm from 'src/common/components/auth/LoginForm';

function login() {
  return (
    <div
      className="bg-auth bg-no-repeat sm:bg-repeat-y bg-cover 
    md:min-h-[100vh]">
      <div className=" md:p-10 w-full flex md:justify-end">
        <div className=" w-[80%] lg:w-[40%] mx-auto lg:mx-0 ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default login;
