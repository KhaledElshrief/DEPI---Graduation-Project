// import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";
import Subscribe from "./pages/Subscribe";
import WorkAsTeacher from "./pages/WorkAsTeacher";
import BlogCardsContainer from "./components/BlogCardsContainer";
import TechnologyTools from "./components/TechnologyTools";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyHome />} />
            <Route path="/Subscribe" element={<Subscribe />} />
            <Route path="/WorkAsTeacher" element={<WorkAsTeacher />} />
            <Route  path="/Blogs" element={<BlogCardsContainer />} />
            <Route path="/TechTools" element={<TechnologyTools />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
