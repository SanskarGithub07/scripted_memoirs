import React from "react";
import Image from "next/image";
import loginLeftImg from "../../public/login-manuscript-2.webp";
import Link from "next/link";

const Login = () => {
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
        <form className="flex flex-col w-full max-w-md mx-auto justify-center">
          <div className="flex flex-col w-3/4 p-4 m-auto mb-0 mt-0">
            <label className="text-lg text-[#E0C097]">
              Email
            </label>
            <input className="p-2 rounded-lg" />
          </div>
          <div className="flex flex-col w-3/4 p-4 m-auto mb-0 mt-0">
            <label className="text-lg text-[#E0C097]">
              Password
            </label>
            <input className="p-2 rounded-lg" />
          </div>
          <button className="w-1/2 p-4 m-auto mt-8 rounded-lg bg-[#5C3D2E] text-[#E0C097] hover:bg-[#B85C38]">
            Submit
          </button>

        <h1 className="text-[#E0C097] text-center mt-8"> Don't have an account ? <span className="text-[#B85C38] font-bold mx-1"><Link href="/registerPage">Register</Link></span></h1>

        </form>
      </div>
    </div>
 );
};

export default Login;