import { BiExport } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { GiMoneyStack } from "react-icons/gi";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../redux/slices/userSlice";
import { getHistory } from "../redux/slices/historySlice";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const historyState = useSelector((state) => state.historyState);
  const stats = useSelector((state) => state.userState?.stats);

  const historyList = Array.isArray(historyState?.history?.data)
    ? historyState.history.data
    : Array.isArray(historyState?.history)
      ? historyState.history
      : [];

  useEffect(() => {
    dispatch(getStats());
    dispatch(getHistory());
  }, [dispatch]);

  const data = {
    labels: ["Sat", "Sun", "Mo", "Tue", "We", "Thu", "Fri"],
    datasets: [
      {
        data: [15000, 2000, 90000, 30000, 45000, 22000, 18000],
        backgroundColor: "#ff2a57",
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => ` Rp ${context.raw.toLocaleString("id-ID")}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#ff2a57", font: { size: 12 } },
      },
      y: {
        min: 0,
        max: 100000,
        ticks: {
          stepSize: 25000,
          color: "#ff2a57",
          font: { size: 10 },
          callback: (value) => (value === 0 ? "0" : `${value / 1000}.000`),
        },
        grid: { color: "#4f5665" },
        border: { dash: [4, 4], display: false },
      },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10 lg:p-8">
      <div className="bg-primary h-28 w-full block lg:hidden" />
      <div className="max-w-7xl mx-auto px-4 -mt-16 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="block lg:hidden bg-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-gray-400 text-xs font-medium">Balance</p>
                  <p className="font-bold text-sm text-gray-800 mt-1">
                    Rp{stats?.balance?.toLocaleString("id-ID") || 0}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs font-medium">Income</p>
                  <p className="font-bold text-sm text-gray-800 mt-1">
                    Rp{stats?.income?.toLocaleString("id-ID") || 0}
                  </p>
                  <p className="text-[10px] text-emerald-500 font-semibold mt-2">
                    +11.01% ↗
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs font-medium">Expense</p>
                  <p className="font-bold text-sm text-gray-800 mt-1">
                    Rp{stats?.expense?.toLocaleString("id-ID") || 0}
                  </p>
                  <p className="text-[10px] text-rose-500 font-semibold mt-2">
                    -5.06% ↘
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <GiMoneyStack className="text-xl" />
                    <span className="text-gray-400 text-sm font-medium">
                      Balance
                    </span>
                  </div>
                  <p className="font-bold text-2xl text-gray-800 mt-2">
                    Rp{stats?.balance?.toLocaleString("id-ID") || 0}
                  </p>
                </div>
                <p className="text-xs text-emerald-500 font-medium mt-4">
                  +2% ↗ <span className="text-gray-400">3 Days Ago</span>
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <FaMoneyBillTrendUp className="text-xl" />
                    <span className="text-gray-400 text-sm font-medium">
                      Income
                    </span>
                  </div>
                  <p className="font-bold text-2xl text-gray-800 mt-2">
                    Rp{stats?.income?.toLocaleString("id-ID") || 0}
                  </p>
                </div>
                <p className="text-xs text-emerald-500 font-medium mt-4">
                  +11.01% ↗
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <FaMoneyBillTransfer className="text-xl" />
                    <span className="text-gray-400 text-sm font-medium">
                      Expense
                    </span>
                  </div>
                  <p className="font-bold text-2xl text-gray-800 mt-2">
                    Rp{stats?.expense?.toLocaleString("id-ID") || 0}
                  </p>
                </div>
                <p className="text-xs text-rose-500 font-medium mt-4">
                  -5.06% ↘
                </p>
              </div>
            </div>

            <div className="flex lg:hidden items-center justify-between gap-4 my-6 text-white">
              <button
                onClick={() => navigate("/topup")}
                className="bg-primary flex-1 flex items-center justify-center py-3.5 rounded-xl cursor-pointer gap-2 font-medium shadow-md hover:opacity-95 transition-opacity"
              >
                <BiExport className="text-xl" />
                <span>Top Up</span>
              </button>

              <button
                onClick={() => navigate("/transfer")}
                className="flex-1 text-primary border border-primary flex items-center justify-center py-3.5 rounded-xl cursor-pointer gap-2 font-medium shadow-md hover:opacity-95 transition-opacity"
              >
                <FaRegPaperPlane className="text-lg" />
                <span>Transfer</span>
              </button>
            </div>

            <div className="hidden lg:flex bg-white p-5 rounded-2xl shadow-sm border border-gray-100 items-center justify-between">
              <div className="font-bold text-gray-900 text-base">
                Fast Service
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("/topup")}
                  className="bg-primary hover:bg-primary/80 cursor-pointer text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition-colors shadow-sm"
                >
                  <BiExport className="text-lg" />
                  <span>Top Up</span>
                </button>
                <button
                  onClick={() => navigate("/transfer")}
                  className="text-primary border border-primary cursor-pointer hover:opacity-60 px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition-colors shadow-sm"
                >
                  <FaRegPaperPlane className="text-base" />
                  <span>Transfer</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="font-bold text-sm lg:text-lg text-gray-900">
                  Income Chart
                </div>
                <div className="flex gap-2">
                  <select className="bg-white border border-dark/80 text-dark/80 text-sm py-1.5 px-3 rounded-xl outline-none cursor-pointer font-medium">
                    <option value="income">Income</option>
                    <option value="outcome">Outcome</option>
                  </select>
                  <select className="bg-white border border-dark/80 text-dark/80 text-sm py-1.5 px-3 rounded-xl outline-none cursor-pointer font-medium">
                    <option value="7">7 Days</option>
                    <option value="30">1 Month</option>
                  </select>
                </div>
              </div>

              <div className="h-56 lg:h-64 w-full">
                <Bar data={data} options={options} />
              </div>
            </div>

            <div className="block lg:hidden mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg text-gray-900">
                  Transaction History
                </div>
                <Link
                  to="/history"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  See All
                </Link>
              </div>

              <div className="space-y-4 mb-32 lg:mb-0">
                {historyList.length > 0 ? (
                  historyList.map((c, i) => {
                    const isReceiver = c?.type === "receiver";
                    return (
                      <div
                        key={c?.id || i}
                        className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                          <img
                            src={`${import.meta.env.VITE_API_URL}/public/image/${c?.image_url}`}
                            alt={c?.fullname || "User"}
                            className="w-12 h-12 rounded-2xl object-cover bg-gray-100"
                          />
                          <div>
                            <h3 className="font-bold text-gray-900 text-sm">
                              {c?.fullname || "Unknown"}
                            </h3>
                            <p className="text-gray-400 text-xs capitalize">
                              {c?.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          {isReceiver ? (
                            <IoMdArrowDropup className="text-emerald-500 text-lg" />
                          ) : (
                            <IoMdArrowDropdown className="text-rose-500 text-lg" />
                          )}
                          <div
                            className={`font-bold text-sm ${
                              isReceiver ? "text-emerald-500" : "text-rose-500"
                            }`}>
                            Rp.{Number(c?.amount || 0).toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-400 text-sm text-center py-4 bg-white rounded-2xl">
                    Belum ada riwayat transaksi.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <div className="flex items-center justify-between mb-6">
              <div className="font-bold text-lg text-gray-900">
                Transaction History
              </div>
              <Link
                to="/history"
                className="text-primary text-sm font-semibold hover:underline"
              >
                See All
              </Link>
            </div>

            <div className="space-y-4">
              {historyList.length > 0 ? (
                historyList.map((c, i) => {
                  const isReceiver = c?.type === "receiver";
                  return (
                    <div
                      key={c?.id || i}
                      className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={`${import.meta.env.VITE_API_URL}/public/image/${c?.image_url}`}
                          alt={c?.fullname || "User"}
                          className="w-11 h-11 rounded-2xl object-cover bg-gray-100"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">
                            {c?.fullname || "Unknown"}
                          </h3>
                          <p className="text-gray-400 text-xs capitalize">
                            {c?.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        {isReceiver ? (
                          <IoMdArrowDropup className="text-emerald-500 text-lg" />
                        ) : (
                          <IoMdArrowDropdown className="text-rose-500 text-lg" />
                        )}
                        <div
                          className={`font-bold text-sm ${
                            isReceiver ? "text-emerald-500" : "text-rose-500"
                          }`}>
                          Rp.{Number(c?.amount || 0).toLocaleString("id-ID")}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-400 text-sm text-center py-4">
                  Belum ada riwayat transaksi.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}