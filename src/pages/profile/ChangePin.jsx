const ChangePin = () => {
  return (
    <section>
      <div className="flex items-center justify-center h-full">
        <div className="w-10/12 lg:w-4/12 h-6/12 lg:h-8/12 rounded-lg bg-white p-8 flex flex-col justify-between">
          <div>
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
            <div className="grid grid-cols-6 gap-2 lg:gap-4">{/* pin */}</div>
          </div>
          <div className="grid gap-4 mt-8 text-center">
            <button className="py-4 lg:py-2 lg:text-sm bg-primary w-full text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePin;
