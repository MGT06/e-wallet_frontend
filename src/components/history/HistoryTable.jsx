import { CiSearch } from "react-icons/ci";
import HistoryCard from "../history/HistoryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getHistory,
  nextPage,
  prevPage,
} from "../../redux/slices/historySlice";
import LoadingModal from "../LoadingModal";
import { useSearchParams } from "react-router";

const HistoryTable = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.historyState.isPending);
  const historyData = useSelector((state) => state.historyState?.history);
  const history = historyData?.data;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    let params = `/user/history?page=1&search=${search}`;
    if (!search) {
      params = "/user/history?page=1";
    }

    const debounce = setTimeout(() => {
      dispatch(
        getHistory({
          params,
        }),
      );
    }, 1000);

    return () => clearTimeout(debounce);
  }, [dispatch, search]);

  const handlePrev = () => {
    dispatch(prevPage(historyData.prev_page));
  };

  const handleNext = () => {
    dispatch(nextPage(historyData.next_page));
  };

  return (
    <>
      {loading && <LoadingModal />}
      <section className="lg:p-8 p-4 w-full lg:shadow-sm lg:rounded-2xl min-h-dvh flex flex-col justify-between bg-white">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h2 className="font-semibold text-lg lg:text-lg">
              Find Transaction
            </h2>
            <div className="w-full lg:w-4/12 p-2 border border-dark-gray/80 rounded-lg flex items-center justify-between">
              <input
                onChange={(e) => {
                  const newSearchParams = new URLSearchParams(searchParams);

                  if (e.target.value) {
                    newSearchParams.set("search", e.target.value);
                  } else {
                    newSearchParams.delete("search");
                  }

                  setSearchParams(newSearchParams);
                }}
                className="w-full outline-none lg:text-xs"
                type="text"
                placeholder="Enter Number Or Full Name"
              />
              <CiSearch className="text-xl" />
            </div>
          </div>
          <div>
            {history?.length ? (
              history.map((el, idx) => (
                <HistoryCard
                  key={idx}
                  id={el.id}
                  color={idx % 2 === 0 ? "bg-white" : "bg-gray"}
                  fullname={el.fullname}
                  phone={el.phone}
                  amount={el.amount}
                  text={el.type === "sender" ? "text-red" : "text-green"}
                  image_url={el.image_url}
                  sender={el.type !== "sender"}
                />
              ))
            ) : (
              <div className="flex w-full items-center justify-center my-32">
                <p className="text-dark-gray">
                  You don't have transaction history
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="hidden w-full py-6 text-xs font-medium lg:flex items-center justify-between text-dark-gray">
          <p>
            Show {history?.length} History of {historyData?.total_data} History
          </p>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="hover:text-primary cursor-pointer"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="hover:text-primary cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryTable;
