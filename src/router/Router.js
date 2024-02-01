import React from "react";
import {
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.LOGIN} />} />
        <Route path={APP_ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.MAIN} element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;