'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession, signOut } from 'next-auth/react';
import Modal from 'react-modal';
import { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiCamera } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
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

        {session ? (
          <div className="flex gap-2 items-center">
            <IoMdAddCircleOutline
              onClick={() => setIsOpen(true)}
              className="text-2xl cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-600"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={session.user.image}
              alt="profile picture"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={signOut}
            />
          </div>
        ) : (
          <button
            onClick={signIn}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <HiCamera className="text-5xl cursor-pointer text-gray-400" />
            <input
              type="text"
              maxLength={150}
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:ring-0 outline-none"
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100 "
            >
              Upload Post
            </button>
          </div>
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300"
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;
