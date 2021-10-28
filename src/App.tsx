import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HeaderLayout } from './layouts/header';
import { Loader } from './layouts/loader';
import { MainPageRoute } from './route/main-page.route';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<MainPageRoute />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
