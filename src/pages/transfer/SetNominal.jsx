import { useForm } from "react-hook-form";
import { HiCash } from "react-icons/hi";
import { VscVerified } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useState } from "react";
import SuccessModal from "../../components/transfer/SuccessModal.jsx";
import FailedModal from "../../components/transfer/FailedModal.jsx";
import { useNavigate } from "react-router";
import PinModal from "../../components/PinModal.jsx";
import LoadingModal from "../../components/LoadingModal.jsx";
import { toast } from "react-toastify";

const SetNominal = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector((state) => state.peopleState.selected);
  const [showSuccessModal, setSuccessShowModal] = useState(false);
  const [showFailedModal, setFailedShowModal] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [body, setBody] = useState(null);
  const loading = useSelector((state) => state.transactionState.isPending);

  const onSubmit = (data) => {
    if (!user.phone) {
      toast.error("Receiver must have phone number");
      return;
    }

    setShowPinModal(true);

    setBody({
      amount: parseInt(data.ammount),
      notes: data.notes,
      receiver_id: user.id,
    });
  };

  const handleDone = () => {
    navigate("/dashboard");
  };

  const handleAgain = () => {
    navigate("/transfer");
  };

  return (
    <>
      {loading && <LoadingModal />}
      {showPinModal && (
        <PinModal
          body={body}
          setFailedShowModal={setFailedShowModal}
          setSuccessShowModal={setSuccessShowModal}
          setShowPinModal={setShowPinModal}
        />
      )}
      {showSuccessModal && (
        <SuccessModal status="Transfer" done={handleDone} again={handleAgain} />
      )}
      {showFailedModal && <FailedModal status="Transfer" again={handleAgain} />}
      <section className="lg:p-8 p-4 w-full bg-white shadow-sm rounded-2xl">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold">People Information</h2>
          </div>
          <div className="lg:p-4 p-2 bg-dark-gray/5 rounded-lg">
            <div className="flex items-center justify-between lg">
              <div className="flex items-center gap-4 justify-start">
                <div className="rounded-lg overflow-hidden w-20 lg:w-19">
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
              {/* <div className="p-2 text-2xl cursor-pointer">
                <CiStar
                  onClick={handleAddFavorit}
                  className={user?.is_favorit ? "hidden" : "block"}
                />
                <FaStar
                  className={`${user?.is_favorit ? "block" : "hidden"} text-yellow-500`}
                />
              </div> */}
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
                  id="ammount"
                  className="text-lg w-full outline-none lg:text-sm"
                  type="number"
                  placeholder="Enter Nominal Transfer"
                  {...register("ammount", {
                    required: "Ammount is required",
                    min: {
                      value: 1,
                      message: "Minimum transfer is Rp 1",
                    },
                  })}
                />
              </div>
              <span
                className={`${errors?.ammount?.message ? "text-red" : "text-gray"} text-[10px]`}
              >
                {errors?.ammount?.message || "error"}
              </span>
            </div>
            <div>
              <h2 className="font-semibold">Notes</h2>
              <p className="text-dark-gray lg:text-sm">
                You can add some notes for this transfer such as payment coffee
                or something
              </p>
            </div>
            <div>
              <textarea
                className="p-4 w-full rounded-lg border border-dark-gray/20 lg:text-sm outline-none"
                rows={8}
                name="notes"
                placeholder="Enter Some Notes"
                {...register("notes")}
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
    </>
  );
};

export default SetNominal;
