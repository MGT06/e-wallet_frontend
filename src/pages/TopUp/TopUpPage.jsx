import { useEffect, useState } from "react";
import SuccessModal from "../../components/transfer/SuccessModal.jsx";
import FailedModal from "../../components/transfer/FailedModal.jsx";
import PaymentSummary from "../../components/topup/PaymentSummary.jsx";
import LoadingModal from "../../components/LoadingModal.jsx";
import { VscVerified } from "react-icons/vsc";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/userSlice.js";
import SetPhoneModal from "../../components/SetPhoneModal.jsx";
import {
  getPaymentMethod,
  topUp,
} from "../../redux/slices/transactionSlice.js";

export default function TopUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  const paymentMethods = useSelector(
    (state) => state.transactionState.paymentMethods,
  );

  const loading = useSelector((state) => state.transactionState.isPending);
  const [selectedMethod, setSelectedMethod] = useState(1);
  const [xenditCode, setXenditCode] = useState("GOPAY");
  const [amount, setAmount] = useState("40000");
  const [tax, setTax] = useState(3);

  const user = useSelector((state) => state.userState.user);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [customError, setCustomError] = useState("");

  const numAm = parseFloat(amount) || 0;
  const deliveryFee = 0;
  const taxFee = (tax / 100) * numAm;
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

    if (numAm < 10000) {
      setCustomError("Minimun top up is Rp10.000");
      return;
    }

    setCustomError("");

    if (!user?.phone) {
      setShowPhoneModal(true);
      return;
    }

    const body = {
      amount: numAm,
      payment_method_id: selectedMethod,
      tax: taxFee,
      total_amount: subTotal,
      xendit_code: xenditCode,
    };

    dispatch(
      topUp({
        body,
        next: (url) => {
          window.location.href = url;
        },
      }),
    );
  };

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getPaymentMethod());
  }, [dispatch]);

  return (
    <>
      {loading && <LoadingModal />}
      {showPhoneModal && <SetPhoneModal />}
      {status === "success" && (
        <SuccessModal
          status={"Top Up"}
          done={() => navigate("/dashboard")}
          again={() => navigate("/top-up")}
        />
      )}
      {status === "failed" && (
        <FailedModal
          status={"Top Up"}
          done={() => navigate("/dashboard")}
          again={() => navigate("top-up")}
        />
      )}
      <div className="min-h-screen font-sans text-dark lg:p-8 lg:bg-gray-50">
        <div className="bg-white lg:shadow-sm rounded-2xl">
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

        <div className="px-8 lg:px-2 py-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
          >
            <div className="lg:p-8 space-y-8 lg:col-span-7 xl:col-span-8 bg-white lg:shadow-sm lg:rounded-3xl">
              <div>
                <h2 className="mb-3 text-base font-bold text-dark">
                  Account Information
                </h2>
                <div className="flex items-start gap-4 rounded-2xl bg-gray/30 p-4">
                  {user?.image_url ? (
                    <img
                      src={user?.image_url}
                      alt="Sigma Cat Wizard"
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-primary text-white rounded-lg flex items-center justify-center text-2xl">
                      <p>{`${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-dark">
                      {user?.name}
                    </h3>
                    <p className="text-sm text-dark-gray">{user?.phone}</p>
                    <div className={user?.phone ? "block" : "hidden"}>
                      <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                        <VscVerified className="text-lg" />
                        Verified
                      </span>
                    </div>
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
                  <p
                    className={`${customError ? "text-red" : "text-white"} mt-0.5 text-xs`}
                  >
                    {customError}
                  </p>
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
                  {paymentMethods?.map((method) => {
                    const isSelected = selectedMethod === method.id;
                    return (
                      <label
                        key={method.id}
                        onClick={() => {
                          setSelectedMethod(method.id);
                          setXenditCode(method.xendit_code);
                          setTax(method.tax_percent);
                        }}
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
