import React from "react";
import "./App.css";

// React router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  JobListings,
  SavedJobs,
  Login,
  Signup,
  JobDetailed,
  Preferences,
  Profile,
  EditProfile,
} from "./pages";
import { AuthRoutes, ProtectedRoutes } from "./helpers/routes";
import InvalidPage from "./pages/auth/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthRoutes>
              <Login />
            </AuthRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoutes>
              <Signup />
            </AuthRoutes>
          }
        />

        {/* Dashboard routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Navigate to="/job-listings" />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/job-listings"
          element={
            <ProtectedRoutes>
              <JobListings />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoutes>
              <JobDetailed />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/saved-jobs"
          element={
            <ProtectedRoutes>
              <SavedJobs />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/preferences"
          element={
            <ProtectedRoutes>
              <Preferences />
            </ProtectedRoutes>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <ProtectedRoutes>
              <EditProfile />
            </ProtectedRoutes>
          }
        />

        <Route element={<InvalidPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
