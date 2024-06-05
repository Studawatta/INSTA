'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

const Header = () => {
  const { datsa: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link href={'/'} className="hidden lg:inline-flex">
          <Image
            src={'/insta_black.webp'}
            alt="instagram icon"
            width={96}
            height={96}
          />
        </Link>
        <Link href={'/'} className=" lg:hidden">
          <Image
            src={'/insta.webp'}
            alt="instagram icon"
            width={96}
            height={96}
          />
        </Link>

        {/* search input */}

        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px] "
        />

        {/* menu items */}

        <button
          onClick={() => signIn()}
          className="text-sm font-semibold text-blue-500"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
