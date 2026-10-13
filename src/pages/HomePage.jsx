import { Link } from "react-router";
import { FaApple } from "react-icons/fa";
import playStore from "../assets/gplay.svg";
import user from "../assets/user.svg";
import heroImage from "../assets/hero-image.png";

const HomePage = () => {
  return (
    <section className="lg:px-14 px-6 pt-8 lg:pt-10 bg-primary text-white">
      <div className="grid gap-6 lg:w-10/12 mx-auto">
        <h2 className="md:text-6xl text-4xl md:text-center">
          Experience the Future of Digital Payments with e-wallet
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <img className="h-84" src={heroImage} alt="hero-image" />
          <div className="grid gap-6 lg:w-5/12">
            <p>Simplify Your Life with Secure and Convenient Mobile Payments</p>
            <div className="flex items-center justify-between gap-4">
              <Link
                to="#"
                className="flex items-center justify-center gap-4 py-3 px-4 border bg-white text-primary border-white rounded-lg w-full text-center"
              >
                <img src={playStore} alt="playstore_logo" />
                <p>Play Store</p>
              </Link>
              <Link
                to="#"
                className="flex items-center justify-center gap-4 py-3 px-4 border border-white rounded-lg w-full text-center"
              >
                <FaApple className="text-xl" />
                App Store
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-4xl">4.6 M</p>
              <img className="h-12" src={user} alt="user" />
            </div>
            <p>Around the world, we already have over 4.6 happy user</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
