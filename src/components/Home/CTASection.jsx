import { FaApple } from "react-icons/fa";
import { Link } from "react-router";
import ctaImage from "../../assets/cta-image.png";
import playStore from "../../assets/gplay.svg";

const CTASection = () => {
  return (
    <section className="bg-gray container">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <img className="w-94 mt-16 lg:mt-0" src={ctaImage} alt="cta_image" />
        <div className="grid gap-8 lg:gap-4 lg:w-6/12">
          <h2 className="text-4xl lg:text-2xl font-semibold">
            Download The App
          </h2>
          <p className="text-dark-gray">
            Ready to experience the future of payments? Download e-wallet now
            and enjoy a world of convenience at your fingertips.
          </p>
          <div className="flex items-center justify-between gap-4">
            <Link
              to="#"
              className="flex items-center justify-center gap-4 py-3 px-4 border bg-primary text-white border-white rounded-lg w-full text-center hover:opacity-90 hover:shadow-lg"
            >
              <img src={playStore} alt="playstore_logo" />
              <p>Play Store</p>
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center gap-4 py-3 px-4 border text-primary border-primary rounded-lg w-full text-center hover:opacity-90 hover:shadow-lg"
            >
              <FaApple className="text-xl" />
              App Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
