"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginLeftImg from "../../public/login-manuscript-2.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  function handleInput(e) {
    setInfo((prev) => ({ ... prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("Must provide all the credentials.");
    }

    console.log(info);
    try {
      setPending(true);
      const res = signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false
      })
      if(res.error){
        setError("Invalid Credentials.");
        setPending(false);
        return;
      }
      router.replace("/");
    } catch (error) {
      setPending(false);
      setError("Something went wrong.");
    }
  }

  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col">
      <div className="w-1/2 h-screen md:w-screen sm:w-screen">
        <div className="relative w-full h-full">
          <Image src={loginLeftImg} className="absolute w-full h-full" />
          <h1 className="font-dancing-script absolute top-1/3 p-8 font-bold lg:text-7xl md:text-6xl sm:text-5xl text-center">
            Scripted Memoirs Login Page
          </h1>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#2D2424] items-center flex flex-col justify-center gap-10 md:w-screen sm:w-screen">
        <h1 className="text-[#B85C38] text-6xl text-center p-4 font-dancing-script">
          Welcome
        </h1>
        <form
          className="flex flex-col w-full max-w-md mx-auto justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-3/4 p-4 m-auto mb-0 mt-0">
            <label
              className="text-lg text-[#E0C097]"
            >
              Email
            </label>
            <input type="email" name="email" className="p-2 rounded-lg" onChange={(e) => {
                handleInput(e)
              }}/>
          </div>
          <div className="flex flex-col w-3/4 p-4 m-auto mb-0 mt-0">
            <label
              className="text-lg text-[#E0C097]"
            >
              Password
            </label>
            <input type="password" className="p-2 rounded-lg" name="password"  onChange={(e) => {
                handleInput(e)
              }}/>
          </div>

          {error && (
            <span className="message bg-[#B85C38] text-[#E0C097] p-4">
              {error}
            </span>
          )}
          <button
            className="w-1/2 p-4 m-auto mt-8 rounded-lg bg-[#5C3D2E] text-[#E0C097] hover:bg-[#B85C38]"
            disabled={pending ? true : false}
          >
            {pending ? "Logging in" : "Login"}
          </button>

          <h1 className="text-[#E0C097] text-center mt-8">
            Don't have an account ?
            <span className="text-[#B85C38] font-bold mx-1">
              <Link href="/registerPage">Register</Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
