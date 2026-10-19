import { MdHistory } from "react-icons/md";
import HistoryTable from "../components/history/HistoryTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../redux/slices/historySlice";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.historyState.history);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 w-full p-4 lg:p-8">
      <div className="lg:grid gap-2 hidden lg:px-8 py-6 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <MdHistory className="text-primary text-2xl" />
          <p className="font-semibold">History Transaction</p>
        </div>
      </div>
      <div className="lg:px-2 py-4">
        {history?.map((h, i) => {
          <HistoryTable key={i} />;
        })}
      </div>
      <div
        className={`${history?.length ? "hidden" : "flex"} w-full h-svw lg:h-full items-center lg:items-start my-32 justify-center`}
      >
        <p className="text-dark-gray">You don't have history yet</p>
      </div>
    </div>
  );
};

export default HistoryPage;
