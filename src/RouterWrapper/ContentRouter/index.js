import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { Header } from "../../components/Header";

const ContentRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default ContentRouter;
