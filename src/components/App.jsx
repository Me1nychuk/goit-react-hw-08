import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { lazy } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiRefreshUser } from "../redux/auth/operations";
import Layout from "./Layout";

import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
