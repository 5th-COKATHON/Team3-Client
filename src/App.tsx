import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/common/Header';
import FloatingButton from './components/common/FloatingButton';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <FloatingButton />
    </>
  );
};

export default App;
