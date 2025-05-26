import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MenuPage from "./pages/Menu/MenuPage.tsx";
import OrderPage from "./pages/Order/OrderPage.tsx";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <MenuPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <OrderPage />
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
