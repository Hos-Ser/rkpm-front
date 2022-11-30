import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./bootstrap.css";
import {
  CreateFormPage,
  HomePage,
  NavHeader,
  PageNotFound,
} from "./components/routes";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createform" element={<CreateFormPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
