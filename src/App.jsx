import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";
import Subscribe from "./pages/Subscribe";
import WorkAsTeacher from "./pages/WorkAsTeacher";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyHome />} />
            <Route path="/Subscribe" element={<Subscribe />} />
            <Route path="/WorkAsTeacher" element={<WorkAsTeacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
