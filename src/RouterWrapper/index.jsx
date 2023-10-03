import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ContentRouter from './ContentRouter';
import AuthRouter from './AuthRouter';
import { RESET_APP } from '../REDUX/common/types';

function Routeur() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RESET_APP());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRouter />} />
        <Route path="/content" element={<ContentRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
