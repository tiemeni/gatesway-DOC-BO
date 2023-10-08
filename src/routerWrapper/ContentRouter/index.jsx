import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import Header from '../../components/Header';
import PraticienRouter from './PraticienRouter';

function ContentRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/praticien/*" element={<PraticienRouter />} />
      </Routes>
    </>
  );
}

export default ContentRouter;
