import { BiExport } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Dashboard() {
  const navigate = useNavigate();

  const data = {
    labels: ["Sat", "Sun", "Mo", "Tue", "We", "Thu", "Fri"],
    datasets: [
      {
        data: [15000, 2000, 90000, 30000, 45000, 22000, 18000],
        backgroundColor: "#2948ff", 
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
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: (context) => ` Rp ${context.raw.toLocaleString("id-ID")}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#4f5665",
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 100000,
        ticks: {
          stepSize: 25000,
          color: "#4f5665",
          font: {
            size: 10,
          },
          callback: (value) => {
            if (value === 0) return "0";
            return `${value / 1000}.000`;
          },
        },
        grid: {
          color: "#F3F4F6", 
        },
        border: {
          dash: [4, 4], 
          display: false,
        },
      },
    },
  };

  const transactions = [
    {
      id: 1,
      name: "Floyd 1",
      type: "Send",
      amount: "-Rp50.000",
      isIncome: false,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 2,
      name: "Floyd 2",
      type: "Send",
      amount: "+Rp50.000",
      isIncome: true,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 3,
      name: "Floyd 3",
      type: "Send",
      amount: "-Rp50.000",
      isIncome: false,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
    {
      id: 4,
      name: "Floyd Miles",
      type: "Send",
      amount: "-Rp50.000",
      isIncome: false,
      avatar: "https://i.pinimg.com/736x/c2/95/ee/c295ee30c2a52643e6c6def2178547e6.jpg",
    },
  ];

  return (
    <div className="bg-white h-full pb-10">
      
      <section className="px-5 bg-primary w-full pb-2 pt-2 flex justify-center">
        <div className="relative -bottom-12 overflow-hidden rounded-3xl bg-white p-6 shadow-xl w-full max-w-xl">
          <div className="relative z-10 grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Balance</p>
              <p className="font-bold text-md text-gray-800">Rp. 500.000</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Income</p>
              <p className="font-bold text-md text-gray-800">Rp. 500.000</p>
              <p className="text-xs text-emerald-500 font-medium mt-2">+11.01% ↗</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Expense</p>
              <p className="font-bold text-md text-gray-800">Rp. 500.000</p>
              <p className="text-xs text-rose-500 font-medium mt-2">-5.06% ↘</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-0">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20">
              <path
                d="M0,40 C150,90 350,-10 500,40 L500,150 L0,150 Z"
                fill="#EEF2FF"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="px-5 max-w-xl mx-auto mt-16">
        
        <div className="flex items-center justify-between gap-4 my-6 text-white">
          <button 
            onClick={() => navigate("/topup")}
            className="bg-primary flex-1 flex items-center justify-center py-3 rounded-xl cursor-pointer gap-2 font-medium shadow-md hover:opacity-95 transition-opacity"
          >
            <BiExport className="text-xl" />
            <span>Top Up</span>
          </button>

          <button 
            onClick={() => navigate("/transfer")}
            className="bg-primary flex-1 flex items-center justify-center py-3 rounded-xl cursor-pointer gap-2 font-medium shadow-md hover:opacity-95 transition-opacity"
          >
            <FaRegPaperPlane className="text-lg" />
            <span>Transfer</span>
          </button>
        </div>

        <div className="flex items-center justify-between mt-8 mb-6">
          <h2 className="font-bold text-lg text-gray-900">Income Chart</h2>
          <div className="flex gap-2">
            <select className="bg-gray-100 text-gray-700 text-sm py-1.5 px-3 rounded-lg outline-none cursor-pointer font-medium">
              <option value="income">Income</option>
              <option value="outcome">Outcome</option>
            </select>
            <select className="bg-gray-100 text-gray-700 text-sm py-1.5 px-3 rounded-lg outline-none cursor-pointer font-medium">
              <option value="7">7 Days</option>
              <option value="30">1 Month</option>
              <option value="3">3 Days</option>
            </select>
          </div>
        </div>

        <div className="my-6 h-56 w-full">
          <Bar data={data} options={options} />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-gray-900">Transaction History</h2>
            <button className="text-primary text-sm font-semibold hover:underline">See All</button>
          </div>

          <div className="space-y-4">
            {transactions.map((c) => (
              <div key={c.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-12 h-12 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                    <p className="text-gray-400 text-xs">{c.type}</p>
                  </div>
                </div>
                <span
                  className={`font-bold text-sm ${
                    c.isIncome ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {c.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}