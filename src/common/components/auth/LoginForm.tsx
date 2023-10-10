import { TextInput } from 'flowbite-react';
import { Manrope } from 'next/font/google';
import Link from 'next/link';
import { HiOutlineEye } from 'react-icons/hi';
import { Image } from '../shared';

const manrope = Manrope({ subsets: ['latin'] });

function LoginForm() {
  return (
    <div className={`p-10 w-full bg-grey-200 rounded-lg ${manrope.className}`}>
      <div className=" w-fit">
        <Link passHref={true} href="/">
          <Image
            alt="Game360 Logo"
            className="cursor-pointer"
            src={'/svgs/logo_Mark.svg'}
            width={88}
            height={32}
          />
        </Link>
      </div>

      <div className="mt-10 flex justify-between">
        <h3
          className="text-[20px] font-extrabold leading-5
         tracking-[-0.4px] text-neutral-900">
          Account Login
        </h3>
        <Link
          href="#"
          passHref
          className="text-sm leading-5 font-normal hover:underline">
          Don’t have an account?
        </Link>
      </div>

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

      <div className="mt-10 text-xs leading-5 text-grey-100">
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply
        </p>
        <p className="mt-6">
          You also agree to receive product-related marketing emails from
          SportConnect, which you can unsubscribe from at any time.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
