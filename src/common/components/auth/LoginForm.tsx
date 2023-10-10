import { TextInput } from 'flowbite-react';
import Link from 'next/link';
import { HiOutlineEye } from 'react-icons/hi';
import { Image } from '../shared';

function LoginForm() {
  return (
    <>
      <div className="py-4">
        <form>
          <div className="py-1">
            <TextInput
              name="email"
              id="email"
              placeholder="Email address"
              required
              type="email"
              className=""
            />
          </div>
          <div className="py-1">
            <TextInput
              name="password"
              id="password"
              placeholder="Password"
              required
              rightIcon={HiOutlineEye}
              type="password"
            />
          </div>

          <Link
            href="#"
            passHref
            className="mt-2 text-sm leading-5 font-normal hover:underline">
            Forgot Password?
          </Link>

          <div className="w-full mt-4">
            <button
              type="submit"
              className="bg-primary hover:bg-red-500 w-full rounded-md p-2
              text-white leading-5 font-medium focus:outline-white focus:ring 
              ">
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6">
        <p className="text-center"> or </p>
        <button
          type="submit"
          className=" bg-white hover:bg-grey-50 w-full rounded-md p-2
              text-black text-start text-sm leading-5 font-medium 
              focus:outline-white focus:ring 
              ">
          <Image
            alt="Google Logo"
            className="cursor-pointer inline-flex mx-3"
            src={'/svgs/Google_Icon.svg'}
            width={20}
            height={20}
          />
          Continue with Google
        </button>
      </div>
    </>
  );
}

export default LoginForm;
