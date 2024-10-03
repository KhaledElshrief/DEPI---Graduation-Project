import React from "react";
import Tcourses from "../components/T-courses.jsx";
import WTabout from "../components/WT-about.jsx";
import TeachingSystems from "../components/TeachingSystems.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkAsTeacher.css";
export default function WorkAsTeacher() {
  return (
    <>
      <WTabout />
      <Tcourses />
      <TeachingSystems />
    </>
  );
}
