/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextInput } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import APIService from 'src/http/api_service';
import { setLoggedIn, setLoggedInUser } from 'src/store/slices/user_slice';
import { Image } from '../shared';

function LoginForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    setLoading(true);
    APIService.login(formData, (response: any, error: any) => {
      if (error) {
        setLoading(false);
        toast.error(error, { theme: 'colored' });
      }
      setLoading(false);
      const responseData = response?.data ?? {};
      localStorage.clear();
      dispatch(setLoggedInUser({ ...responseData }));
      dispatch(setLoggedIn(true));
    });
  };

  return (
    <>
      <div className="py-4">
        <form
          onSubmit={handleSubmit}
          method="POST">
          <div className="py-1">
            <TextInput
              name="email"
              id="email"
              placeholder="Email address"
              required
              type="email"
              className=""
              onChange={handleFieldChange}
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
              onChange={handleFieldChange}
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
              {loading ? <ClipLoader color="text-white" size={20} /> : "Login"}
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
