import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import MainPage from '../../pages/MainPage';

function ContentRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default ContentRouter;
