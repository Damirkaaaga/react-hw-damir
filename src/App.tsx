import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MenuPage from "./pages/Menu/MenuPage.tsx";
import OrderPage from "./pages/Order/OrderPage.tsx";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
