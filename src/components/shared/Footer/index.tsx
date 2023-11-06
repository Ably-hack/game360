import Link from 'next/link';
import { Image } from '..';
import { footerData } from 'src/constants/website';

const Footer = () => {
  return (
    <div className="2xl:px-8 px-4 pb-5 mt-8 pt-7 border-t bg-white">
      <div className="">
        <div className="flex space-y-4 lg:space-y-0 flex-col lg:flex-row lg:items-center justify-between">
          <Link scroll={true} href="/">
            <Image
              alt="Game360 Logo"
              className="cursor-pointer"
              src={'/svgs/logo.svg'}
              width={130}
              height={35}
            />
          </Link>
          <div className="flex items-center justify-between space-x-4">
            {footerData.map(({ href, item }, idx) => (
              <Link
                key={idx}
                href={`${href}`}
                className="text-neutral-500 text-md">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-neutral-400 text-md">
            © Game360, Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
