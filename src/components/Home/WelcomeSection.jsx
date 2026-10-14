import appThumbnail from "../../assets/app-thumbnail.png";

const WelcomeSection = () => {
  return (
    <section>
      <div className="py-14 px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between text-center lg:text-left">
          <div className="grid gap-4 lg:gap-6">
            <p className="text-lg font-bold text-primary">
              WELCOME TO E-WALLET
            </p>
            <h2 className="text-4xl">
              Your All-in-One Digital Payment Solution
            </h2>
            <p className="text-dark-gray">
              Say goodbye to cash and hello to the future of payments! With
              e-wallet, you have the power of secure, fast, and convenient
              digital transactions right at your fingertips. Whether you're
              shopping, dining out, or sending money to loved ones, we've got
              you covered.
            </p>
            <button className="lg:w-fit py-2 px-4 rounded-lg bg-primary text-white hover:opacity-90 hover:shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="my-6">
            <img src={appThumbnail} alt="app-thumbnail" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
