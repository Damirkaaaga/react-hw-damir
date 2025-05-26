import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import MenuPage from "./pages/Menu/MenuPage.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import PrivateRoute from "./routes/PrivateRoute";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MenuPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
