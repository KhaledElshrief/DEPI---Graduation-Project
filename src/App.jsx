import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MyHome from "./pages/MyHome";
import Subscribe from "./pages/Subscribe";
import WorkAsTeacher from "./pages/WorkAsTeacher";
import BlogCardsContainer from "./components/BlogCardsContainer";
const App = () => {
  return (
    <>
      <BlogCardsContainer />
    </>
  );
};

export default App;
