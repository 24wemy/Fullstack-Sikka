import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout'; // Layout utama
import DashboardPage from './components/pages/DashboardPage'; // Halaman Dashboard

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute login */}
        <Route path="/" element={<Login />} />

        {/* Rute halaman utama (dashboard) dengan layout */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Rute profil dengan layout */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Profile />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect ke login jika rute tidak dikenali */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
