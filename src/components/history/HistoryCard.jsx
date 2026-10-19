import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteHistory } from "../../redux/slices/historySlice";
import { toast } from "react-toastify";

const HistoryCard = ({
  id,
  color,
  text,
  fullname,
  phone,
  amount,
  image_url,
  sender,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteHistory({
        body: {
          history_id: parseInt(id),
        },
        next: (message) => {
          toast.success(message);
        },
        setErr: (message) => {
          toast.error(message);
        },
      }),
    );
  };

  return (
    <article
      className={`p-2 ${color} border-b border-b-dark-gray/20 rounded-lg text-xs lg:text-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="rounded-lg overflow-hidden w-18 lg:w-14 hidden lg:block">
          {image_url ? (
            <img
              className="h-8 w-8 rounded-full"
              src={`${import.meta.env.VITE_API_URL}/public/image/${image_url}`}
              alt="user-img"
            />
          ) : (
            <div className="h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center">
              <p>{`${fullname[0].toUpperCase()}${fullname[1].toUpperCase()}`}</p>
            </div>
          )}
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-24 gap-2 lg:w-6/12">
          <p className="lg:text-sm">{fullname}</p>
          <p className="lg:text-sm">{phone}</p>
        </div>
        <div className="py-2 lg:p-2 text-2xl flex items-center gap-2 w-28 lg:w-38">
          {sender ? (
            <IoMdArrowDropup className="text-green-500" />
          ) : (
            <IoMdArrowDropdown className="text-red-500" />
          )}
          <p className={`${text} font-semibold text-sm`}>
            Rp
            {sender
              ? amount.toLocaleString("id-ID")
              : amount.toLocaleString("id-ID").slice(1)}
          </p>
        </div>
        <div
          onClick={handleDelete}
          className="p-2 text-lg cursor-pointer text-red hover:opacity-60 block"
        >
          <FaRegTrashAlt />
        </div>
      </div>
    </article>
  );
};

export default HistoryCard;
