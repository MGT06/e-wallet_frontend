import { useNavigate } from "react-router";
import failedImage from "../../assets/failed-img.png";

const FailedModal = ({ status, again }) => {
  const navigate = useNavigate();

  return (
    <article className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-50">
      <div className="flex items-center justify-center h-full">
        <div className="w-10/12 lg:w-4/12 rounded-lg bg-white p-8 flex flex-col justify-between">
          {/* <div>
            <div className="border-b border-b-dark-gray/40 pb-4">
              <h2 className="font-semibold">
                {status.toUpperCase()} TO GHALUH 1
              </h2>
            </div>
          </div> */}
          <div className="flex items-center justify-center">
            <img className="lg:h-60" src={failedImage} alt="success-image" />
          </div>
          <div className="grid gap-1 text-center lg:text-xs">
            <p className="text-lg font-semibold">
              Oops {status} <span className="text-red">Failed</span>
            </p>
            <p className="text-dark-gray">
              Sorry Theres is an issue for your {status}, try again later !
            </p>
          </div>
          <div className="grid gap-4 mt-8 text-center">
            <button
              onClick={again}
              className="py-4 lg:py-2 lg:text-sm bg-primary w-full text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg"
            >
              Try Again
            </button>
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="py-4 lg:py-2 lg:text-sm w-full text-primary border border-primary rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg"
            >
              Back To Dashboard
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FailedModal;
