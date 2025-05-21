import React from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import MenuPage from "./pages/MenuPage.tsx"; 

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuPage />
      <Footer />
    </div>
  );
};

export default App;
