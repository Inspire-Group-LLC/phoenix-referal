import React from "react";
import {
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Welcome from "../components/Welcome/Welcome.js";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import References from "../components/References/References.jsx";
import MonitoringPage from "../components/MonitoringPage/MonitoringPage.jsx";
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.LOGIN} />} />
        <Route path={APP_ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.MAIN} element={<Main />} />
        <Route path={APP_ROUTES.REFERENCES} element={<References />} />
        <Route path={APP_ROUTES.MONITORING} element={<MonitoringPage />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
