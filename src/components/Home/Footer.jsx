import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-primary text-white ">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="grid gap-2 lg:w-3/12">
            <div className="flex gap-2 items-center">
              <img className="h-12" src="/LOGO.png" alt="e-wallet-logo" />
              <p className="text-2xl font-semibold">E Wallet</p>
            </div>
            <p className="lg:text-sm">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl lg:text-lg font-semibold">GET IN TOUCH</h2>
            <div className="flex gap-2 items-center">
              <FiPhone />
              <p className="lg:text-sm">+62 5637 8882 9901</p>
            </div>
            <div className="flex gap-2 items-center">
              <HiOutlineMail />
              <p className="lg:text-sm">contact@ewallet.com</p>
            </div>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl lg:text-lg font-semibold">SOCIAL MEDIA</h2>
            <div className="flex gap-6 lg:gap-4">
              <Link
                to=""
                className="w-9 h-9 p-2 flex items-center justify-center text-xl bg-white text-primary rounded-full hover:opacity-90"
              >
                <FaTwitter />
              </Link>
              <Link
                to=""
                className="w-9 h-9 p-2 flex items-center justify-center text-xl bg-white text-primary rounded-full hover:opacity-90"
              >
                <FaFacebookF />
              </Link>
              <Link
                to=""
                className="w-9 h-9 p-2 flex items-center justify-center text-xl bg-white text-primary rounded-full hover:opacity-90"
              >
                <FaInstagram />
              </Link>
              <Link
                to=""
                className="w-9 h-9 p-2 flex items-center justify-center text-xl bg-white text-primary rounded-full hover:opacity-90"
              >
                <TbBrandGithubFilled />
              </Link>
            </div>
          </div>
          <div className="grid gap-3 lg:w-3/12">
            <h2 className="text-xl lg:text-lg font-semibold">NEWSLETTER</h2>
            <div className="bg-white py-3 px-4 lg:p-2 lg:rounded-lg rounded-xl flex items-center gap-2">
              <MdOutlineEmail className="text-dark-gray text-2xl lg:text-sm" />
              <input
                className="text-lg lg:text-sm w-full outline-none bg-white text-black placeholder:text-dark-gray"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <button className="py-3 px-4 lg:p-2 lg:rounded-lg lg:text-sm bg-white text-primary font-semibold rounded-xl hover:opacity-90 hover:shadow-lg cursor-pointer">
              Subscribe
            </button>
          </div>
          <div className="py-4">
            <hr />
          </div>
        </div>
        <p className="text-center pt-8 lg:text-xs">
          © Copyright 2022, All Rights Reserved by <br />
          E-Wallet
        </p>
      </div>
    </footer>
  );
};

export default Footer;
