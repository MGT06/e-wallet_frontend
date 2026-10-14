import { useState } from 'react'
import logoGogle from '../../assets/google.svg'
import logoFacebook from '../../assets/facebookLogo.svg'
import { MdOutlineEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu"; 
import gamberLogin from '../../assets/tanganLogin.svg'
import { Link } from 'react-router';


export default function Login() {  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="py-6 px-5 flex justify-center items-center">
        <section className="w-full max-w-md flex flex-col gap-4">
          <div className="flex items-center">
            <div className="h-10 w-10">
              <img
                src="./LOGO.png"
                alt="logo-apps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-2xl font-semibold text-primary">E-Wallet</div>
          </div>

          <div className="font-semibold text-[19px]">Hello Welcome Back 👋</div>

          <div className="text-[12.5px] text-dark-gray">
            Fill out the form correctly or you can login with several option.
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
            <button className="cursor-pointer border border-dark-gray/30 rounded-3xl h-12 py-1.5 px-19 flex justify-center items-center md:px-51 md:py-1">
              <img
                src={logoGogle}
                alt="logo-google"
                className="min-h-8 min-w-8 object-cover"
              />
              <span className="hidden md:flex md:whitespace-nowrap md:ml-2">
                Sign In With Google
              </span>
            </button>

            <button className="cursor-pointer border border-dark-gray/30 rounded-3xl h-12 py-1 px-19 flex justify-center items-center md:px-51 md:py-1.5">
              <img
                src={logoFacebook}
                alt="logo-facebook"
                className="min-h-8 min-w-8 object-cover"
              />
              <span className="hidden md:flex md:whitespace-nowrap md:ml-2">
                Sign In With Facebook
              </span>
            </button>
          </div>

          <div className="flex w-full items-center gap-4 text-dark-gray/50">
            <div className="flex-1 border-t border-dark-gray/20" />
            <span className="text-sm">or</span>
            <div className="flex-1 border-t border-dark-gray/20" />
          </div>

          <div className="flex w-full flex-col">
            <label>Email</label>
            <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
              <MdOutlineEmail size={20} />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="outline-none w-full"
              />
            </div>
          </div>

          <div className="flex w-full flex-col">
            <label>Password</label>
            <div className="border border-dark-gray/30 rounded-xl px-4 py-2 flex items-center gap-2">
              <IoMdKey
                className="border-2 border-slate-700 rounded-sm text-xl"
                size={16}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 focus:outline-none">
                {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
              </button>
            </div>
          </div>

          <div className="bg-primary text-white flex justify-center items-center py-3 rounded-xl cursor-pointer">
            Login
          </div>
          <div className="flex justify-center items-center text-dark-gray">
            Have An Account?
            <Link to={"/register"} className="text-primary ml-1 cursor-pointer">
              Register
            </Link>
          </div>
        </section>
      </div>

      <div className="hidden md:flex bg-primary items-center justify-center p-8 relative overflow-hidden rounded-l-[40px]">
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src={gamberLogin}
            alt="E-Wallet Illustration"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}