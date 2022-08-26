import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Overview } from "./pages/Overview/Overview";
import { Details } from "./pages/Details/Details";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { OVERVIEW_URL, DETAILS_URL } from "./utils/paths";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path={OVERVIEW_URL} element={<Overview />} />
            <Route path={DETAILS_URL} element={<Details />} />
          </Routes>
        </BrowserRouter>
        ,
      </main>
      <Footer />
    </>
  );
};

export default App;
