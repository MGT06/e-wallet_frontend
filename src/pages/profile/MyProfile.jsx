import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone, LuUserRound } from "react-icons/lu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/slices/userSlice";

const MyProfile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <section className="container w-full lg:border rounded-lg lg:border-dark-gray/20">
      <div className="grid grid-cols-4 grid-rows-8 lg:grid-cols-8 lg:grid-rows-4 gap-6">
        <div className="rounded-lg overflow-hidden col-span-2 row-span-2">
          {user?.image_url ? (
            <img
              className="w-full h-full"
              src={`${import.meta.env.VITE_API_URL}/public/image/${user?.image_url}`}
              alt="user-img"
            />
          ) : (
            <div className="w-full h-full bg-primary flex items-center justify-center text-white text-4xl">
              <p>{`${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`}</p>
            </div>
          )}
        </div>
        <div className="col-start-3 lg:col-start-7 col-span-2">
          <Link
            to="edit"
            className="w-full flex gap-2 items-center justify-center py-3 lg:py-2 px-4 rounded-lg bg-primary text-white text-xs hover:opacity-90 hover:shadow-lg"
          >
            <FiEdit className="text-lg" />
            Change Profile
          </Link>
        </div>
        <div className="row-start-3 col-span-4 row-span-2">
          <div className="grid gap-2">
            <p className="text-lg lg:text-sm font-medium">Fullname</p>
            <div className="flex items-start gap-2 text-dark-gray">
              <LuUserRound className="text-lg" />
              <p className="text-xs">{user?.name}</p>
            </div>
            <p className="text-lg lg:text-sm font-medium">Phone</p>
            <div className="flex items-start gap-2 text-dark-gray">
              <LuPhone className="text-lg" />
              <p className="text-xs">{user?.phone || "Phone not set yet"}</p>
            </div>
            <p className="text-lg lg:text-sm font-medium">Email</p>
            <div className="flex items-start gap-2 text-dark-gray">
              <HiOutlineMail className="text-lg" />
              <p className="text-xs">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="lg:row-start-3 lg:col-start-7 row-start-5 col-span-4 row-span-2">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-sm lg:text-xs font-medium">Password</p>
              <Link
                to="/profile/change-password"
                className="text-sm lg:text-xs text-primary hover:underline"
              >
                Change Password
              </Link>
            </div>
            <div className="grid gap-2">
              <p className="text-sm lg:text-xs font-medium">Pin</p>
              <Link
                to="/change-pin"
                className="text-sm lg:text-xs text-primary hover:underline"
              >
                Change Pin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
