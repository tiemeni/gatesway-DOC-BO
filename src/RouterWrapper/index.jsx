import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ContentRouter from './ContentRouter';
import AuthRouter from './AuthRouter';
import reseteApp from '../REDUX/common/actions';

function Routeur() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reseteApp());
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
