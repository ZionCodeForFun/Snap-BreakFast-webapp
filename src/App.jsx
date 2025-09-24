import React from "react";
import Auth from "./auth/Auth";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
