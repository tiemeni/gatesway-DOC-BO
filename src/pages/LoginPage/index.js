import { useSelector } from "react-redux";

export const LoginPage = () => {
  const label = useSelector((state) => state.Common.waveForLogin);
  return label;
};
