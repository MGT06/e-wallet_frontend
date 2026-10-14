import { BiSolidCheckCircle } from "react-icons/bi";
import featuresImage from "../../assets/features-image.png";

const FeaturesSection = () => {
  return (
    <section className="bg-gray">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <img className="lg:w-4/12" src={featuresImage} alt="features-image" />
          <div className="lg:w-5/12 grid gap-4">
            <h2 className="font-semibold text-2xl">
              All The Great Zwallet Features.
            </h2>
            <p className="text-sm">
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
            <div className="text-green grid gap-2">
              <div className="flex items-center gap-1">
                <BiSolidCheckCircle className="text-green text-xl" />
                <p className="font-semibold">Small Fee</p>
              </div>
              <div className="flex items-center gap-1">
                <BiSolidCheckCircle className="text-green text-xl" />
                <p className="font-semibold">Data Secured</p>
              </div>
              <div className="flex items-center gap-1">
                <BiSolidCheckCircle className="text-green text-xl" />
                <p className="font-semibold">User Friendly</p>
              </div>
            </div>
            <button className="lg:w-fit py-2 px-4 rounded-lg bg-primary text-white hover:opacity-90 hover:shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
