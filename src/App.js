import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./bootstrap.css";
import {
  BuildFormPage,
  BuildProcessPage,
  BuildReportPage,
  FormsPage,
  HomePage,
  NavHeader,
  PageNotFound,
  ProcessesPage,
  ProfilePage,
  ReportsPage,
} from "./routes";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/build-form" element={<BuildFormPage />} />
          <Route path="/build-process" element={<BuildProcessPage />} />
          <Route path="/build-report" element={<BuildReportPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/processes" element={<ProcessesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
