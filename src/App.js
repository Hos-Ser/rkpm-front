import { useStore } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./bootstrap.css";
import { BuildFormPage, HomePage, NavHeader, PageNotFound } from "./routes";

function App() {
  console.log(useStore());
  return (
    <BrowserRouter>
      <NavHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buildform" element={<BuildFormPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
