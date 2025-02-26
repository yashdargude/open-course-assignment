// app.jsx

import React from "react";
import { HelmetProvider } from "react-helmet-async";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <HelmetProvider>
      <WelcomePage />
    </HelmetProvider>
  );
}

export default App;
