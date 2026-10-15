import { MdHistory } from "react-icons/md";
import HistoryTable from "../components/history/HistoryTable";

const HistoryPage = () => {
  return (
    <div className="lg:pr-11">
      <div className="lg:grid gap-4 hidden lg:px-8 py-6">
        <div className="flex items-center gap-2">
          <MdHistory className="text-primary text-2xl" />
          <p className="font-semibold">History Transaction</p>
        </div>
      </div>
      <div className="lg:p-4">
        <HistoryTable />
      </div>
    </div>
  );
};

export default HistoryPage;
