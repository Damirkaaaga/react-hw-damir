import React from "react";
import LoginPage from "./pages/Login/LoginPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header totalItems={0} />
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;
