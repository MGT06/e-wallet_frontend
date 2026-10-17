import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUserInfo} from "../redux/slices/userSlice.js";
import useToken from "./UseToken";

const useUser = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);
  const token = useToken();

  useEffect(() => {
    dispatch(getUserInfo({ token }));
  }, [dispatch, token]);

  return user;
};

export default useUser;
