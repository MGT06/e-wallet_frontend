import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addFavorit, getSelectedUser } from "../../redux/slices/peopleSlice";
import { toast } from "react-toastify";

const PeopleCard = ({ id, fullname, image_url, phone, is_favorit, color }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getSelectedUser({ id, fullname, image_url, phone, is_favorit }));
    navigate(`/transfer/${id}/nominal`);
  };

  const handleAddFavorit = () => {
    dispatch(
      addFavorit({
        body: {
          favorite_account_id: id,
        },
        next: (message) => {
          toast.success(message);
        },
      }),
    );
  };

  return (
    <article
      className={`px-2 lg:px-4 py-2 ${color} border-b border-b-dark-gray/20 rounded-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="rounded-lg overflow-hidden w-18 lg:w-12">
          {image_url ? (
            <img
              src={`${import.meta.env.VITE_API_URL}/public/image/${image_url}`}
              alt="user-image"
            />
          ) : (
            <div className="p-6 h-6 w-6 bg-primary text-xs text-white rounded-lg flex items-center justify-center">
              <p>{`${fullname[0].toUpperCase()}${fullname[1].toUpperCase()}`}</p>
            </div>
          )}
        </div>
        <div
          onClick={handleClick}
          className="cursor-pointer flex flex-col lg:flex-row lg:gap-32 items-center w-full lg:justify-between lg:w-6/12"
        >
          <p className="lg:text-sm">{fullname}</p>
          <p className="lg:text-sm">{phone}</p>
        </div>
        <div className="p-2 text-2xl cursor-pointer">
          <CiStar
            onClick={handleAddFavorit}
            className={is_favorit ? "hidden" : "block"}
          />
          <FaStar
            onClick={handleAddFavorit}
            className={`${is_favorit ? "block" : "hidden"} text-yellow-500`}
          />
        </div>
      </div>
    </article>
  );
};

export default PeopleCard;
