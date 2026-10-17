import { useSelector } from "react-redux";

const useToken = () => {
  const token = useSelector((state) => state?.authState?.auth?.token);

  return token;
};

export default useToken;
