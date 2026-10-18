import { Link } from "react-router";

const SetPhoneModal = () => {
  return (
    <article className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="flex items-center justify-center h-full">
        <div className="w-10/12 lg:w-8/12 rounded-lg bg-white p-8 flex flex-col justify-between">
          <div className="grid gap-1 text-center lg:text-xs">
            <p className="text-lg font-semibold">You must set phone first</p>
            <p className="text-dark-gray my-8">
              You must set up the number first to proceed with the top-up
            </p>
          </div>
          <div className="grid gap-4 mt-8 text-center">
            <Link
              to="/profile/edit"
              className="py-4 lg:py-2 lg:text-sm bg-primary w-full text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg"
            >
              Set phone now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SetPhoneModal;
