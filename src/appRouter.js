import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import React from 'react';
import HomePage from './pages/home';
import GalleryPage from './pages/gallery';
import AboutPage from './pages/about';
import ErrorPage from "./pages/error";


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage className="content" />} errorElement={<ErrorPage />}  />
          <Route path='/gallery' element={<GalleryPage className="content" />} errorElement={<ErrorPage />}  />
          <Route path='/about' element={<AboutPage className="content" />} errorElement={<ErrorPage />}  />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;