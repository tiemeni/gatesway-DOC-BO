import { useSelector } from 'react-redux';

const LoginPage = () => {
  const label = useSelector((state) => state.Common.waveForLogin);
  return label;
};

export default LoginPage;
