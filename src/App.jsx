import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";
import Subscripe from "./pages/Subscripe";
import WorkAsTeacher from "./pages/WorkAsTeacher";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyHome />} />
            <Route path="/Subscripe" element={<Subscripe />} />
            <Route path="/WorkAsTeacher" element={<WorkAsTeacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
