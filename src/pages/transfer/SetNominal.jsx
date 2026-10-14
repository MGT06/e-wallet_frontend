import { CiStar } from "react-icons/ci";
import { HiCash } from "react-icons/hi";
import { VscVerified } from "react-icons/vsc";

const SetNominal = () => {
  return (
    <section className="container w-full lg:border rounded-lg lg:border-dark-gray/20">
      <div className="flex flex-col justify-between gap-6">
        <div>
          <h2 className="text-lg font-semibold">People Information</h2>
        </div>
        <div className="container bg-dark-gray/10 rounded-lg">
          <div className="flex items-center justify-between lg">
            <div className="flex items-center gap-4 justify-start">
              <div className="rounded-lg overflow-hidden w-20 lg:w-16">
                <img
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  alt="user-image"
                />
              </div>
              <div className="grid gap-2">
                <p className="lg:text-sm font-semibold">Ghaluh 1</p>
                <p className="lg:text-sm">(239) 555-0108</p>
                <div className="flex items-center gap-2 bg-primary text-white w-fit py-0.5 px-3 rounded-lg">
                  <VscVerified className="text-lg" />
                  <p className="text-xs">Verified</p>
                </div>
              </div>
            </div>
            <div className="p-2 text-2xl cursor-pointer">
              <CiStar className="text-3xl" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">Amount</h2>
          <p className="text-dark-gray lg:text-sm">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </p>
        </div>
        <div className="flex items-center gap-2  py-2 px-4 rounded-lg border border-dark-gray/20">
          <HiCash className="text-2xl" />
          <input
            className="text-lg w-full outline-none lg:text-sm"
            type="number"
            placeholder="Enter Nominal Transfer"
          />
        </div>
        <div>
          <h2 className="font-semibold">Notes</h2>
          <p className="text-dark-gray lg:text-sm">
            You can add some notes for this transfer such as payment coffee or
            something
          </p>
        </div>
        <div>
          <textarea
            className="p-4 w-full rounded-lg border border-dark-gray/20 lg:text-sm outline-none"
            rows={8}
            name="notes"
            placeholder="Enter Some Notes"
          />
        </div>
        <button className="py-2 px-4 bg-primary text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg">
          Submit & Transfer
        </button>
      </div>
    </section>
  );
};

export default SetNominal;
