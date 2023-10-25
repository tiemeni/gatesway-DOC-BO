import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import PraticienRouter from './PraticienRouter';
import UserRouter from './UserRouter';
import PatientRouter from './PatientRouter';
import SpecialityRouter from './SpecialityRouter';
import MotifsRouter from './MotifsRouter';
import LieuxRouter from './LieuxRouter';
import StructureRouter from './StructureRouter';

function ContentRouter() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/praticien/*" element={<PraticienRouter />} />
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/patient/*" element={<PatientRouter />} />
        <Route path="/speciality/*" element={<SpecialityRouter />} />
        <Route path="/motif/*" element={<MotifsRouter />} />
        <Route path="/lieu/*" element={<LieuxRouter />} />
        <Route path="/structure/*" element={<StructureRouter />} />
      </Routes>
    </>
  );
}

export default ContentRouter;
