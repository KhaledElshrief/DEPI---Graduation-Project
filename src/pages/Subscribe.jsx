import React from "react";
import SubBanner from "../components/SubBanner";
import SubFeatures from "../components/SubFeatures";
import SubForm from "../components/SubForm";
import SubInfo from "../components/SubInfo";
import SubLast from "../components/SubLast";
import SubPlans from "../components/SubPlans";

import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkAsTeacher.css";
export default function Subscribe() {
  return (
    <>
      <div className="container sub-page col-lg-9">
        <SubInfo />
        <SubPlans />
        <SubFeatures />
        <SubBanner />
        <SubLast />
        <SubForm />
      </div>
    </>
  );
}
