import LoginPage from "./pages/LoginPage";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route, Link } from "react-router-dom";
import PatientsPage from "./pages/PatientsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DoctorsPage from "./pages/DoctorsPage";
import MessagesPage from "./pages/MessagesPage";
import EducationContentPage from "./pages/EducationContentPage";
import MedicineInventoryPage from "./pages/MedicineInventoryPage";
import SettingsPage from "./pages/SettingsPage";
import ProtectedRoutes from "./components/common/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/education-content" element={<EducationContentPage />} />
          <Route
            path="/medicine-inventory"
            element={<MedicineInventoryPage />}
          />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
