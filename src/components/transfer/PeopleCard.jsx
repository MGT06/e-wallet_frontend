import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getSelectedUser } from "../../redux/slices/peopleSlice";

const PeopleCard = ({ id, fullname, image_url, phone, color }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getSelectedUser({ id, fullname, image_url, phone }));
    navigate(`/transfer/${id}/nominal`);
  };
  return (
    <article
      onClick={handleClick}
      className={`px-4 py-2 ${color} border-b border-b-dark-gray/20 rounded-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="rounded-lg overflow-hidden w-18 lg:w-14">
          {image_url ? (
            <img
              src={`${import.meta.env.VITE_API_URL}/public/image/${image_url}`}
              alt="user-image"
            />
          ) : (
            <div className="h-7 w-7 bg-primary text-xs text-white rounded-full flex items-center justify-center">
              <p>{`${fullname[0].toUpperCase()}${fullname[1].toUpperCase()}`}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-32 items-center w-full lg:justify-between lg:w-6/12">
          <p className="lg:text-sm">{fullname}</p>
          <p className="lg:text-sm">{phone}</p>
        </div>
        <div className="p-2 text-2xl cursor-pointer">
          <CiStar />
        </div>
      </div>
    </article>
  );
};

export default PeopleCard;
