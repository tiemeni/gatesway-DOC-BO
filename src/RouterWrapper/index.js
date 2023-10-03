import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContentRouter from "./ContentRouter";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { resetApp } from "../REDUX/common/actions";

const Routeur = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetApp());
  });
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
