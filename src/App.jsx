import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
