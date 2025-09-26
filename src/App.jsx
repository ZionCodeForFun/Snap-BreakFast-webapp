import React, { useState } from "react";
import Auth from "./auth/Auth";
import { HashRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./page/Landing/LandingPage";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Auth`" element={<Auth user={user} setUser={setUser} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
