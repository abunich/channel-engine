import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes } from "./Router";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
};

export default App;
