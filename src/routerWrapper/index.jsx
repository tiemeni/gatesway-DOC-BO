import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ContentRouter from './ContentRouter';
import AuthRouter from './AuthRouter';
import { resetApp } from '../redux/common/actions';
import ListeCentres from '../pages/LIsteCentres';

function Routeur() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetApp());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRouter />} />
        <Route path="/content/*" element={<ContentRouter />} />
        <Route path="/liste_centres" element={<ListeCentres />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
