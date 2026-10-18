import { useForm } from "react-hook-form";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { HiCash } from "react-icons/hi";
import { VscVerified } from "react-icons/vsc";
import { useSelector } from "react-redux";

const SetNominal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector((state) => state.peopleState.selected);

  const onSubmit = () => {
    console.log("first");
  };

  const handleAddFavorit = () => {};

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
                {user?.image_url ? (
                  <img
                    src={`${import.meta.env.VITE_API_URL}/public/image/${user?.image_url}`}
                    alt="user-image"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-primary text-white w-full h-18">
                    <p>{`${user?.fullname[0].toUpperCase()}${user?.fullname[1].toUpperCase()}`}</p>
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <p className="lg:text-sm font-semibold">{user?.fullname}</p>
                <p className="lg:text-sm">{user?.phone}</p>
                <div
                  className={`${user?.phone ? "block" : "hidden"} flex items-center gap-2 bg-primary text-white w-fit py-0.5 px-3 rounded-lg`}
                >
                  <VscVerified className="text-lg" />
                  <p className="text-xs">Verified</p>
                </div>
              </div>
            </div>
            <div className="p-2 text-2xl cursor-pointer">
              <CiStar
                onClick={handleAddFavorit}
                className={user?.is_favorit ? "hidden" : "block"}
              />
              <FaStar
                className={`${user?.is_favorit ? "block" : "hidden"} text-yellow-500`}
              />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          <div>
            <h2 className="font-semibold">Amount</h2>
            <p className="text-dark-gray lg:text-sm">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2  py-2 px-4 rounded-lg border border-dark-gray/20">
              <HiCash className="text-2xl" />
              <input
                id="nominal"
                className="text-lg w-full outline-none lg:text-sm"
                type="number"
                placeholder="Enter Nominal Transfer"
                {...register("nominal", {
                  required: "Nominal is required",
                  min: {
                    value: 1,
                    message: "Minimum transfer is Rp 1",
                  },
                })}
              />
            </div>
            <span
              className={`${errors?.nominal?.message ? "text-red" : "text-gray"} text-[10px]`}
            >
              {errors?.nominal?.message || "error"}
            </span>
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
          <button
            type="submit"
            className="mb-32 lg:mb-0 py-2 px-4 bg-primary text-white rounded-lg cursor-pointer hover:opacity-90 hover:shadow-lg"
          >
            Submit & Transfer
          </button>
        </form>
      </div>
    </section>
  );
};

export default SetNominal;
