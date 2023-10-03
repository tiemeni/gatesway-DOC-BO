import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
