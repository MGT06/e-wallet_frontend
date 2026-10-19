import { CiSearch } from "react-icons/ci";
import HistoryCard from "../history/HistoryCard";

const HistoryTable = () => {
  return (
    <section className="container w-full lg:shadow-sm lg:rounded-2xl bg-white">
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <h2 className="font-semibold text-lg lg:text-sm">Find Transaction</h2>
          <div className="w-full lg:w-4/12 p-2 border border-dark-gray/80 rounded-lg flex items-center justify-between">
            <input
              className="w-full outline-none lg:text-xs"
              type="text"
              placeholder="Enter Number Or Full Name"
            />
            <CiSearch className="text-xl" />
          </div>
        </div>
        <div>
          <HistoryCard color="bg-gray" />
          <HistoryCard color="bg-white" />
          <HistoryCard color="bg-gray" />
          <HistoryCard color="bg-white" />
        </div>
      </div>
      <div className="hidden w-full py-6 text-xs font-medium lg:flex items-center justify-between text-dark-gray">
        <p>Show 5 History of 100 History</p>
        <div className="flex gap-3">
          <button className="hover:text-primary cursor-pointer text-dark-gray/60">
            Prev
          </button>
          <button className="text-primary cursor-pointer"> 1</button>
          <button className="hover:text-primary cursor-pointer">2</button>
          <button className="hover:text-primary cursor-pointer">3</button>
          <button className="hover:text-primary cursor-pointer">4</button>
          <button className="hover:text-primary cursor-pointer">5</button>
          <button className="hover:text-primary cursor-pointer">6</button>
          <button className="hover:text-primary cursor-pointer">7</button>
          <button className="hover:text-primary cursor-pointer">8</button>
          <button className="hover:text-primary cursor-pointer">9</button>
          <button className="hover:text-primary cursor-pointer">Next</button>
        </div>
      </div>
    </section>
  );
};

export default HistoryTable;
