import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard-page";
import HomePage from "./pages/home-page";
import LoginRegisterPage from "./pages/login-register-page";
import MyDashboardPage from "./pages/my-dashboard-page";
import MyJournalsPage from "./pages/my-journals-page";
import MyGoalsPage from "./pages/my-goals-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/register" element={<LoginRegisterPage isRegister />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage>
              <MyDashboardPage />
            </DashboardPage>
          }
        />
        <Route
          path="/myjournals"
          element={
            <DashboardPage>
              <MyJournalsPage />
            </DashboardPage>
          }
        />
        <Route
          path="/mygoals"
          element={
            <DashboardPage>
              <MyGoalsPage />
            </DashboardPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
