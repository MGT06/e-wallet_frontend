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
    <div className="lg:pr-11">
      <div className="lg:grid gap-4 hidden lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2">
          <MdHistory className="text-primary text-2xl" />
          <p className="font-semibold">History Transaction</p>
        </div>
      </div>
      <div className="lg:p-4">
        {history?.map((h, i) => {
          <HistoryTable key={i} />;
        })}
      </div>
      <div
        className={`${history?.length ? "hidden" : "flex"} w-full h-svw lg:h-full items-center justify-center`}
      >
        <p className="text-dark-gray">You don't have history yet</p>
      </div>
    </div>
  );
};

export default HistoryPage;
