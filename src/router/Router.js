import {
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Welcome from "../components/Welcome/Welcome.js";
import Registration  from "../components/Registration/Registration.js";
import Login  from "../components/Login/Login.js";
import Main  from "../components/Main/Main.js";

<Navigate to="/" />

export default function Router(){
  return (
    <HashRouter>
      <Routes>
        <Route path={APP_ROUTES.WELCOME} element={<Welcome />} />
        <Route path={APP_ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.MAIN} element={<Main />} />
      </Routes>
    </HashRouter>
  );
};
