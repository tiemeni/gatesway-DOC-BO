import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PraticienPage from '../../../pages/PraticienPages';
import CreatePraticien from '../../../pages/PraticienPages/createPratcien';

function PraticienRouter() {
  return (
    <Routes>
      <Route path="/" element={<PraticienPage />} />
      <Route path="/add" element={<CreatePraticien />} />
    </Routes>
  );
}

export default PraticienRouter;
