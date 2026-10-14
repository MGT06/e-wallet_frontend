import microsoftLogo from "../../assets/microsoft-logo.svg";
import dropboxLogo from "../../assets/dropbox-logo.svg";
import hnmLogo from "../../assets/hnm-logo.svg";
import airbnbLogo from "../../assets/airbnb-logo.svg";
import canonLogo from "../../assets/canon-logo.svg";
import dellLogo from "../../assets/dell-logo.svg";

const TestimoniesSection = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-5/12 text-center lg:text-left">
          <h2 className="text-2xl font-semibold">100+ Trusted Partners</h2>
          <p className="text-dark-gray">
            We have reached global level and have 100+ brand partners around the
            globe.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <img className="h-32 lg:h-16" src={microsoftLogo} alt="partner-logo" />
          <img className="h-32 lg:h-16" src={dropboxLogo} alt="partner-logo" />
          <img className="h-32 lg:h-16" src={hnmLogo} alt="partner-logo" />
          <img className="h-32 lg:h-16" src={airbnbLogo} alt="partner-logo" />
          <img className="h-32 lg:h-16" src={canonLogo} alt="partner-logo" />
          <img className="h-32 lg:h-16" src={dellLogo} alt="partner-logo" />
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;
