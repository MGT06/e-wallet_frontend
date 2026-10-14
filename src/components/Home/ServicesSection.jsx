import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";

const Features = () => {
  return (
    <section className="pt-8 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-2 text-2xl text-white">
            <PiHeadphones />
          </div>
          <div className="grid gap-1">
            <h2 className="font-semibold">24/7 Support</h2>
            <p className="text-xs text-dark-gray">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-2 text-2xl text-white">
            <IoShieldCheckmarkOutline />
          </div>
          <div className="grid gap-1">
            <h2 className="font-semibold">Data Privacy</h2>
            <p className="text-xs text-dark-gray">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-2 text-2xl text-white">
            <PiHeadphones />
          </div>
          <div className="grid gap-1">
            <h2 className="font-semibold">Easy Download</h2>
            <p className="text-xs text-dark-gray">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
