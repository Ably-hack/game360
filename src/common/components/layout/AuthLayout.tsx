import Link from 'next/link';
import { Image } from '../shared';
import { Manrope } from 'next/font/google';
import { FC, ReactNode } from 'react';

const manrope = Manrope({ subsets: ['latin'] });
type AuthProps = {
  children: ReactNode;
  title: string;
  to: string;
  linkText: string;
  showInfo: boolean;
};
const AuthLayout: FC<AuthProps> = ({
  children,
  title,
  to,
  linkText,
  showInfo,
}) => {
  return (
    <div
      className="bg-auth bg-no-repeat sm:bg-repeat-y bg-cover 
    min-h-[100vh] h-full overflow-y-auto">
      <div className="md:p-10 w-full flex md:justify-end">
        <div className=" w-[80%] lg:w-[40%] mx-auto lg:mx-0 ">
          <div
            className={`p-10 w-full bg-grey-200 mt-12 lg:mt-8 rounded-lg ${manrope.className}`}>
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
                {title}
              </h3>
              {!!linkText && (
                <Link
                  href={`${to}`}
                  passHref
                  className="text-sm leading-5 font-normal hover:underline">
                  {linkText}
                </Link>
              )}
            </div>
            {children}
            {showInfo && (
              <div className="mt-10 text-xs leading-5 text-grey-100">
                <p>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply
                </p>
                <p className="mt-6">
                  You also agree to receive product-related marketing emails
                  from SportConnect, which you can unsubscribe from at any time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
