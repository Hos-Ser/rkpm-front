import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./bootstrap.css";
import {
  CreateFormPage,
  HomePage,
  NavFooter,
  NavHeader,
  PageNotFound,
} from "./components/routes";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createform" element={<CreateFormPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <NavFooter />
    </BrowserRouter>
  );
}

export default App;
