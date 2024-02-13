import React from "react";
import {
  Route,
  Routes,
  Navigate,
  HashRouter,
  useLocation,
} from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import MonitoringPage from "../components/Monitoring/MonitoringPage";

function RequireAuth({ children }) {
  const token = localStorage.getItem("@token");
  const isTokenAvailable = token != null && token != "";

  let location = useLocation();

  if (!isTokenAvailable) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.LOGIN} />} />
        <Route path={APP_ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        {/* <Route path={APP_ROUTES.MAIN} element={<Main />} /> */}
        
        <Route
          path={APP_ROUTES.MAIN}
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        />
        <Route
          path={APP_ROUTES.MONITORING}
          element={
            <RequireAuth>
              <MonitoringPage />
            </RequireAuth>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default Router;
