// import { useState } from "react";
import useWindowWidth from "./Hooks/useWindowWidth";
import { Routes, Route } from "react-router-dom";
import DesktopLayout from "./Layouts/DesktopLayout";
import MobileLayout from "./Layouts/MobileLayout";

function App() {
  const width = useWindowWidth();

  return (
    <Routes>
      <Route
        path="*"
        element={width > 480 ? <DesktopLayout /> : <MobileLayout />}
      />
    </Routes>
  );
}

export default App;
