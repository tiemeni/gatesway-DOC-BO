import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainPage from '../../pages/MainPage';
import { useSocket } from '../../providers/socket';
import Header from '../../components/Header';
import PraticienRouter from './PraticienRouter';
import UserRouter from './UserRouter';
import PatientRouter from './PatientRouter';
import SpecialityRouter from './SpecialityRouter';
import MotifsRouter from './MotifsRouter';
import LieuxRouter from './LieuxRouter';
import StructureRouter from './StructureRouter';
import { getAllLieux } from '../../redux/lieux/actions';
import { getAllMotifs } from '../../redux/motifs/actions';

function ContentRouter() {
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    dispatch(getAllLieux());
    dispatch(getAllMotifs());
    socket.connect();
  }, []);

  useEffect(() => {
    socket.on('connected', () => {
      const idc = localStorage.getItem('idc');
      socket.emit('setUserId', idc);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <Header />
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
