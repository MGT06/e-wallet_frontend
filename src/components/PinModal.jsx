import { Link } from "react-router";

const PinModal = () => {
  return (
    <article className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-50">
      <div className="flex items-center justify-center h-full">
        <div className="w-10/12 lg:w-4/12 h-6/12 lg:h-8/12 rounded-lg bg-white p-8 flex flex-col justify-between">
          <div>
            <div className="border-b border-b-dark-gray/40 pb-4">
              <h2 className="font-semibold">TRANSFER TO GHALUH 1</h2>
            </div>
            <div className="py-4">
              <p className="text-lg font-semibold lg:text-sm">
                Enter Your Pin 👋
              </p>
              <p className="text-dark-gray lg:text-sm">
                Enter Your Pin For Transaction
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-around">
            <div className="p-2 border-b-2 border-b-primary w-fit">
              <input
                className="text-5xl lg:text-3xl w-8 outline-none"
                type="number"
                placeholder="1"
              />
            </div>
            <div className="p-2 border-b-2 border-b-dark-gray/50 w-fit">
              <input
                className="text-5xl lg:text-3xl w-8 outline-none"
                type="number"
              />
            </div>
            <div className="p-2 border-b-2 border-b-dark-gray/50 w-fit">
              <input
                className="text-5xl lg:text-3xl w-8 outline-none"
                type="number"
              />
            </div>
            <div className="p-2 border-b-2 border-b-dark-gray/50 w-fit">
              <input
                className="text-5xl lg:text-3xl w-8 outline-none"
                type="number"
              />
            </div>
            <div className="p-2 border-b-2 border-b-dark-gray/50 w-fit">
              <input
                className="text-5xl lg:text-3xl w-8 outline-none"
                type="number"
              />
            </div>
          </div>
          <div className="grid gap-4 mt-8 text-center">
            <button className="py-4 lg:py-2 lg:text-sm bg-primary w-full text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg">
              Next
            </button>
            <div className="flex items-center justify-center gap-2 lg:text-sm">
              <p>Forgot Your Pin?</p>
              <Link className="text-primary" to="">
                Reset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PinModal;
