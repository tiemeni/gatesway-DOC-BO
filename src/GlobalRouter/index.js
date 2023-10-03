import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContentRouter from "./ContentRouter";
import AuthRouter from "./AuthRouter";

const Routeur = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRouter />} />
          <Route path="/content" element={<ContentRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routeur;
