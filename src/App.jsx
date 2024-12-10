import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import { Content } from "./Content.jsx";
import { ChiSiamo } from "./ChiSiamo.jsx";

import DefaultLayout from "./DefaultLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/languages" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
