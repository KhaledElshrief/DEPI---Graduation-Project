import React from "react";
import CourseHead from "../components/CourseHead";
import CourseCard from "../components/CourseCard";
import CourseLessons from "../components/CourseLessons";

export default function CourseDetails() {
  return (
    <div className="CourseDetails">
      <CourseHead />
      <CourseLessons />
      <CourseCard />
    </div>
  );
}
