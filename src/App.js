import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./bootstrap.css";
import { BuildFormPage, HomePage, NavHeader } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buildform" element={<BuildFormPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
