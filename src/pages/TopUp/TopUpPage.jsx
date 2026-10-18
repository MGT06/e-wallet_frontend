import { useEffect, useState } from "react";
import bri from "../../assets/bri.svg";
import dana from "../../assets/dana.svg";
import bca from "../../assets/bca.svg";
import gopay from "../../assets/gopay.svg";
import ovo from "../../assets/ovo.svg";
import SuccessModal from "../../components/transfer/SuccessModal.jsx";
import FailedModal from "../../components/transfer/FailedModal.jsx";
import PaymentSummary from "../../components/topup/PaymentSummary.jsx";
import LoadingModal from "../../components/LoadingModal.jsx";
import { VscVerified } from "react-icons/vsc";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/userSlice.js";
import SetPhoneModal from "../../components/SetPhoneModal.jsx";

const PAYMENT_METHODS = [
  {
    id: "bri",
    name: "Bank Rakyat Indonesia",
    logo: bri,
  },
  {
    id: "dana",
    name: "Dana",
    logo: dana,
  },
  {
    id: "bca",
    name: "Bank Central Asia",
    logo: bca,
  },
  {
    id: "gopay",
    name: "Gopay",
    logo: gopay,
  },
  {
    id: "ovo",
    name: "Ovo",
    logo: ovo,
  },
];

export default function TopUpPage() {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  const [selectedMethod, setSelectedMethod] = useState("bri");
  const [amount, setAmount] = useState("40000");

  const user = useSelector((state) => state.userState.user);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const numAm = parseFloat(amount) || 0;
  const deliveryFee = 0;
  const taxFee = numAm ? 4000 : 0;
  const subTotal = numAm + deliveryFee + taxFee;

  const formatRupiah = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })
      .format(val)
      .replace("Rp", "Rp. ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user?.phone) {
      setShowPhoneModal(true);
      return;
    }
    console.log({ selectedMethod, numAm, subTotal });
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      {/* <LoadingModal /> */}
      {showPhoneModal && <SetPhoneModal />}
      {status === "success" && <SuccessModal status={"Top Up"} />}
      {status === "failed" && <FailedModal status={"Top Up"} />}
      <div className="min-h-screen bg-white font-sans text-dark">
        <div className="border-b border-gray-100 bg-white">
          <div className="container flex items-center gap-3 py-4 text-dark">
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <h1 className="text-lg font-bold">Top Up Account</h1>
          </div>
        </div>

        <div className="section-container">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
          >
            <div className="space-y-8 lg:col-span-7 xl:col-span-8">
              <div>
                <h2 className="mb-3 text-base font-bold text-dark">
                  Account Information
                </h2>
                <div className="flex items-center gap-4 rounded-2xl bg-gray/30 p-4">
                  {user?.image_url ? (
                    <img
                      src={`${import.meta.env}/public/img/${user?.image_url}`}
                      alt="Sigma Cat Wizard"
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-primary text-white rounded-lg flex items-center justify-center">
                      <p>{`${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-dark">
                      {user?.name}
                    </h3>
                    <p className="text-sm text-dark-gray">{user?.phone}</p>
                    <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                      <VscVerified className="text-lg" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-dark">Amount</h2>
                <p className="mt-0.5 text-xs text-dark-gray">
                  Type the amount you want to transfer to your e-wallet account
                </p>
                <div className="relative mt-3">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-dark-gray">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Nominal Transfer"
                    className="no-scrollbar-number w-full rounded-xl border border-gray-200 py-3.5 pl-11 pr-4 text-sm font-medium text-dark placeholder:text-dark-gray/60 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-dark">
                  Payment Method
                </h2>
                <p className="mt-0.5 text-xs text-dark-gray">
                  Choose your payment method for top up account
                </p>

                <div className="mt-4 space-y-3">
                  {PAYMENT_METHODS.map((method) => {
                    const isSelected = selectedMethod === method.id;
                    return (
                      <label
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl p-4 transition-all ${
                          isSelected
                            ? "bg-gray/40 ring-1 ring-primary/20"
                            : "bg-gray/20 hover:bg-gray/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-gray-400 bg-white"
                            }`}
                          >
                            {isSelected && (
                              <div className="h-2 w-2 rounded-full bg-white" />
                            )}
                          </div>

                          <div className="flex h-8 w-12 items-center justify-center">
                            <img
                              src={method.logo}
                              alt={method.name}
                              className="max-h-6 max-w-full object-contain"
                            />
                          </div>

                          <span className="text-sm font-semibold text-dark">
                            {method.name}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="block lg:hidden">
                <PaymentSummary
                  numAm={numAm}
                  deliveryFee={deliveryFee}
                  taxFee={taxFee}
                  subTotal={subTotal}
                  formatRupiah={formatRupiah}
                />
              </div>
            </div>

            <div className="hidden lg:col-span-5 lg:block xl:col-span-4">
              <div className="sticky top-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <PaymentSummary
                  numAm={numAm}
                  deliveryFee={deliveryFee}
                  taxFee={taxFee}
                  subTotal={subTotal}
                  formatRupiah={formatRupiah}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
