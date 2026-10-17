import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/slices/profileSlice";
import useToken from "./UseToken";

const useProfile = () => {
  const dispatch = useDispatch();

  const token = useToken();
  const profile = useSelector((state) => state.profileState.profile);

  useEffect(() => {
    dispatch(getProfile({ token }));
  }, [dispatch, token]);

  return profile;
};

export default useProfile;
