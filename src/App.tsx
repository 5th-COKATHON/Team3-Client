import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/common/Header';
import FloatingButton from './components/common/FloatingButton';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FloatingButton />
    </>
  );
};

export default App;
