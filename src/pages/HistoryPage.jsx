import { MdHistory } from "react-icons/md";
import HistoryTable from "../components/history/HistoryTable";

const HistoryPage = () => {
  return (
    <div className="container lg:bg-gray-50 w-full">
      <div className="lg:grid gap-2 hidden bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <MdHistory className="text-primary text-2xl" />
          <p className="font-semibold">History Transaction</p>
        </div>
      </div>
      <div className="py-4">
        <HistoryTable />;
      </div>
    </div>
  );
};

export default HistoryPage;
