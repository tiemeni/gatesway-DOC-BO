import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import { useSocket } from '../../providers/socket';
// import Header from '../../components/Header';

function ContentRouter() {
  const socket = useSocket();

  useEffect(() => {
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
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default ContentRouter;
